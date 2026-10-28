export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== "string") return false;
  // RFC 5322 compliant regex check
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.trim());
}

export type SignupType = "self" | "other";

export interface WaitlistPayload {
  email: string;
  signupType: SignupType;
  consentGiven: boolean;
  sourcePage?: string;
  sourceSection?: string;
}
