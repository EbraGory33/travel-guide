import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";

import AuthCard from "../../components/Auth/AuthCard";
import OAuthButton from "../../components/Auth/OAuthButton";
import TextInput from "../../components/Auth/TextInput";
import { logIn, verify } from "../../services/authAPI";
import { FaFacebookF, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("Logging in...");
      await logIn(formData);
      await verify(dispatch);
      navigate("/home");
    } catch (error) {
      console.error("Login failed", error);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <AuthCard title="Log in">
      <div className="space-y-3">
        <OAuthButton
          icon={<FaFacebookF className="text-white" />}
          text="Log in with Facebook"
          color="bg-blue-600 text-white border-blue-600"
          hoverColor="bg-blue-700"
        />

        <OAuthButton
          icon={<FcGoogle />}
          text="Log in with Google"
          color="border-gray-300"
          hoverColor="bg-gray-200"
        />

        <OAuthButton
          icon={<FaApple />}
          text="Log in with Apple"
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
        <TextInput
          placeholder="Email"
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <TextInput
          placeholder="Password"
          type="password"
          name="password"
          required
          value={formData.password}
          onChange={handleChange}
        />

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
