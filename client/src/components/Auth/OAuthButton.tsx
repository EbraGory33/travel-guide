import type { ReactNode } from "react";

interface OAuthButtonProps {
  icon: ReactNode;
  text: string;
  color?: string; // optional tailwind classes
}

export default function OAuthButton({
  icon,
  text,
  color = "",
}: OAuthButtonProps) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-full border font-medium ${color}`}
      type="button"
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}
