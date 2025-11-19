import AuthCard from "./src/componets/Auth/AuthCard";
import OAuthButton from "./src/componets/Auth/OAuthButton";
import TextInput from "./src/componets/Auth/TextInput";

import { FaFacebookF, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Logging in...");
  };

  return (
    <AuthCard title="Log in to view this page">
      <div className="space-y-3">
        <OAuthButton
          icon={<FaFacebookF className="text-white" />}
          text="Log in with Facebook"
          color="bg-blue-600 text-white border-blue-600"
        />

        <OAuthButton
          icon={<FcGoogle />}
          text="Log in with Google"
          color="border-gray-300"
        />

        <OAuthButton
          icon={<FaApple />}
          text="Log in with Apple"
          color="border-gray-300"
        />
      </div>

      {/* Divider */}
      <div className="my-6 flex items-center gap-4">
        <div className="flex-1 h-px bg-gray-300" />
        <p className="text-gray-400">or</p>
        <div className="flex-1 h-px bg-gray-300" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <TextInput placeholder="Email" type="email" required />
        <TextInput placeholder="Password" type="password" required />

        <p className="text-sm text-right text-gray-600 hover:underline cursor-pointer">
          Forgot password
        </p>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-xl font-medium"
        >
          Log in
        </button>
      </form>

      <p className="text-center mt-6 text-gray-600">
        Don't have an account yet?{" "}
        <a href="/register" className="font-semibold hover:underline">
          Sign up
        </a>
      </p>
    </AuthCard>
  );
}
