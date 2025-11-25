// TODO: make Register page functional
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";

import AuthCard from "../../components/Auth/AuthCard";
import OAuthButton from "../../components/Auth/OAuthButton";
import TextInput from "../../components/Auth/TextInput";
import { signUp, verify } from "../../services/authAPI";
import { FaFacebookF, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    verify_Password: "",
    phone: "",
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.verify_Password) {
      setError("Passwords do not match");
      return;
    }
    try {
      console.log("Registering User...");
      await signUp(formData);
      await verify(dispatch);
      navigate("/home");
    } catch (error) {
      console.error("SignUp failed", error);
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
          <TextInput
            name="firstName"
            placeholder="First Name"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <TextInput
            name="lastName"
            placeholder="Last Name"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <TextInput
          name="email"
          placeholder="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextInput
          name="phone"
          placeholder="Phone"
          type="text"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <TextInput
          name="password"
          placeholder="Password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <TextInput
          name="verify_Password"
          placeholder="Verify Password"
          type="password"
          value={formData.verify_Password}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-xl font-medium"
        >
          Sign up
        </button>
        {error && (
          <p className="text-red-500 font-extrabold text-sm">{error}</p>
        )}
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
