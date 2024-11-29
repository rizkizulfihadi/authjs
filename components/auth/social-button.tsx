import { IoLogoGoogle, IoLogoGithub } from "react-icons/io";
import { signIn } from "@/auth";

export const GoogleButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/dashboard" });
      }}
    >
      <button
        type="submit"
        className="flex items-center justify-center gap-1 py-2.5 rounded-lg uppercase text-white font-medium text-sm bg-blue-500 w-full"
      >
        <IoLogoGoogle />
        Sign in with google
      </button>
    </form>
  );
};

export const GithubButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/dashboard" });
      }}
    >
      <button
        type="submit"
        className="flex items-center justify-center gap-1 py-2.5 rounded-lg uppercase text-white font-medium text-sm bg-gray-800 w-full"
      >
        <IoLogoGithub />
        Sign in with Github
      </button>
    </form>
  );
};
