import { signIn } from "next-auth/react";
export default function SignInButton() {
  return (
    <button
      className="bg-white py-3 px-6 text-xs ml-auto uppercase tracking-[2px] hover:bg-terralight hover:text-white font-semibold"
      onClick={() => signIn()}
    >
      Sign In
    </button>
  );
}
