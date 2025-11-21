import type { InputHTMLAttributes } from "react";
import { useState } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function TextInput({ type = "text", ...rest }: TextInputProps) {
  const [show, setShow] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword ? (show ? "text" : "password") : type;

  return (
    <div className="relative w-full">
      <input
        type={inputType}
        className="w-full px-4 py-3 rounded-xl border focus:ring focus:ring-gray-200 outline-none"
        {...rest}
      />

      {isPassword && (
        <button
          type="button"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
          onClick={() => setShow((prev) => !prev)}
        >
          {show ? "🙈" : "👁️"}
        </button>
      )}
    </div>
  );
}
