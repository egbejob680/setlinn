import { Input } from "./Input";

export default function EmailLoginForm() {
  return (
    <form className="space-y-6">
      <Input
        label="Email Address"
        type="email"
        placeholder="example@mail.com"
        icon="mail"
      />
      <Input
        label="Password"
        type="password"
        placeholder="••••••••"
        icon="lock"
      />

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="h-4 w-4 text-[#0d94af]" />
          <span className="text-sm text-[#0d94af]">Remember me</span>
        </label>
        <a href="#" className="text-sm font-bold text-[#0d94af] hover:underline">
          Forgot Password?
        </a>
      </div>

      <button className="w-full rounded-xl bg-blue-500 px-6 py-4 text-base font-bold text-white shadow-lg shadow-blue-500/20">
        Sign In
      </button>
    </form>
  );
}
