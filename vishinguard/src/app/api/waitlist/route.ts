import { NextResponse } from "next/server";
import { isValidEmail, SignupType } from "@/lib/validation";
import { supabase } from "@/lib/supabase";

// Fallback in-memory store if Supabase credentials are not yet configured in .env.local
const localWaitlistMemory: Array<{
  id: string;
  email: string;
  signupType: SignupType;
  consentGiven: boolean;
  sourcePage: string;
  sourceSection: string;
  createdAt: string;
}> = [];

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, signupType, consentGiven, sourcePage = "unknown", sourceSection = "unknown" } = body;

    const errors: Record<string, string> = {};

    if (!email || !isValidEmail(email)) {
      errors.email = "Vänligen ange en giltig e-postadress.";
    }

    if (!signupType || (signupType !== "self" && signupType !== "other")) {
      errors.signupType = "Vänligen välj om du installerar för dig själv eller för någon annan.";
    }

    if (!consentGiven) {
      errors.consent = "Vänligen markera samtyckesrutan för att fortsätta.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const normalizedEmail = email.trim().toLowerCase();

    // If Supabase is connected
    if (supabase) {
      // Check for existing signup
      const { data: existing, error: checkError } = await supabase
        .from("waitlist_signups")
        .select("id")
        .eq("email", normalizedEmail)
        .maybeSingle();

      if (checkError) {
        console.error("Supabase select error:", checkError);
        return NextResponse.json(
          { success: false, message: "Något gick fel. Försök igen om ett tag." },
          { status: 500 }
        );
      }

      if (existing) {
        return NextResponse.json(
          {
            success: false,
            duplicate: true,
            errors: {
              email: "Den här e-postadressen finns redan på väntelistan. Vi hör av oss vid lansering.",
            },
          },
          { status: 409 }
        );
      }

      // Insert new waitlist row
      const { error: insertError } = await supabase
        .from("waitlist_signups")
        .insert([
          {
            email: normalizedEmail,
            signup_type: signupType,
            consent_given: consentGiven,
            source_page: sourcePage,
            source_section: sourceSection,
          },
        ]);

      if (insertError) {
        console.error("Supabase insert error:", insertError);
        return NextResponse.json(
          { success: false, message: "Något gick fel. Försök igen om ett tag." },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Tack! Du är nu med på väntelistan. Vi meddelar dig så snart Vishinguard är redo att laddas ner.",
      });
    }

    // Local in-memory fallback for immediate zero-config testing
    const duplicate = localWaitlistMemory.some((item) => item.email === normalizedEmail);
    if (duplicate) {
      return NextResponse.json(
        {
          success: false,
          duplicate: true,
          errors: {
            email: "Den här e-postadressen finns redan på väntelistan. Vi hör av oss vid lansering.",
          },
        },
        { status: 409 }
      );
    }

    localWaitlistMemory.push({
      id: Math.random().toString(36).substring(2, 9),
      email: normalizedEmail,
      signupType,
      consentGiven,
      sourcePage,
      sourceSection,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Tack! Du är nu med på väntelistan. Vi meddelar dig så snart Vishinguard är redo att laddas ner.",
    });
  } catch (err) {
    console.error("API waitlist error:", err);
    return NextResponse.json(
      { success: false, message: "Något gick fel. Försök igen om ett tag." },
      { status: 500 }
    );
  }
}
