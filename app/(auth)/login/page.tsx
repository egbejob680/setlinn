import AuthLayout from "@/components/auth/AuthLayout";
import LoginForm from "@/components/auth/AuthForm";

export default function LoginPage() {
  return (
    <main className="pt-20 mt-24 mb-38  text-[#111718]">
      <AuthLayout>
        <LoginForm />
      </AuthLayout>
    </main>
  );
}
