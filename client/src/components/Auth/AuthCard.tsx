// components/Auth/AuthCard.jsx
import type { ReactNode } from "react";

interface AuthCardProps {
  title: string;
  children: ReactNode;
}
export default function AuthCard({ title, children }: AuthCardProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200/50 p-4">
      <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-xl">
        <h2 className="text-center text-2xl font-semibold mb-6">{title}</h2>
        {children}
      </div>
    </div>
  );
}
