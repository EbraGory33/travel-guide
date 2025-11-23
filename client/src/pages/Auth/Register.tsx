import AuthCard from "../../components/Auth/AuthCard";
import OAuthButton from "../../components/Auth/OAuthButton";
import TextInput from "../../components/Auth/TextInput";

import { FaFacebookF, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Register() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Logging in...");
  };

  return (
    <AuthCard title="Sign Up">
      <div className="space-y-3">
        <OAuthButton
          icon={<FaFacebookF className="text-white" />}
          text="Sign Up with Facebook"
          color="bg-blue-600 text-white border-blue-900"
          hoverColor="bg-blue-700"
        />

        <OAuthButton
          icon={<FcGoogle />}
          text="Sign Up with Google"
          color="border-gray-300"
          hoverColor="bg-gray-200"
        />

        <OAuthButton
          icon={<FaApple />}
          text="Sign Up with Apple"
          color="border-gray-300"
          hoverColor="bg-gray-200"
        />
      </div>

      {/* Divider */}
      <div className="my-6 flex items-center gap-4">
        <div className="flex-1 h-px bg-gray-300" />
        <p className="text-gray-400">or</p>
        <div className="flex-1 h-px bg-gray-300" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-4">
          <TextInput placeholder="First Name" type="text" required />
          <TextInput placeholder="Last Name" type="text" required />
        </div>

        <TextInput placeholder="Email" type="email" required />
        <TextInput placeholder="Password" type="password" required />
        <TextInput placeholder="Verify Password" type="password" required />

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-xl font-medium"
        >
          Sign up
        </button>
      </form>

      <p className="text-center mt-6 text-gray-600">
        Already have and account?{" "}
        <a href="/login" className="font-semibold hover:underline">
          Log in
        </a>
      </p>
    </AuthCard>
  );
}
