import { Eye, ArrowRight } from "lucide-react"
import SocialAuthButtons from "./SocialAuthButtons"
import Divider from "./ Divider"
import PasswordStrength from "./PasswordStrength"
import Link from "next/link"

export default function RegisterForm() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-white px-6 py-12 lg:px-20">
      <div className="w-full max-w-120">
        {/* Header */}
        <div className="flex flex-col gap-2 mb-8">
          <h2 className="text-[#111718] text-3xl font-bold tracking-tight">
            Create Account
          </h2>
          <p className="text-[#618389]">
            Already have an account?{" "}
            <Link  className="text-[#0d94af] font-bold hover:underline" href="login">
              Login
            </Link>
           
          </p>
        </div>

        <SocialAuthButtons />
        <Divider />

        <form className="flex flex-col gap-5">
          {/* Full Name */}
          <Input label="Full Name" placeholder="Enter your full name" />

          {/* Email */}
          <Input
            label="Email Address"
            placeholder="alex@example.com"
            type="email"
          />

          {/* Password */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold text-[#111718]">
                Password
              </label>
              <button
                type="button"
                className="text-[#0d94af] text-xs font-bold flex items-center gap-1"
              >
                <Eye className="w-4 h-4" />
                Show
              </button>
            </div>

            <input
              type="password"
              placeholder="Create a strong password"
              className="h-14 rounded-xl border border-[#dbe4e6] px-4 focus:border-[#0d94af] focus:ring-1 focus:ring-[#0d94af] outline-none"
            />

            <PasswordStrength />
          </div>

          {/* Terms */}
          <div className="flex items-start gap-3 py-2">
            <input type="checkbox" className="mt-1 h-5 w-5 accent-[#0d94af]" />
            <p className="text-sm text-[#618389]">
              I agree to the{" "}
              <a className="text-[#0d94af] hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a className="text-[#0d94af] hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>

          {/* Submit */}
          <button className="h-14 bg-[#0d94af] text-white rounded-xl font-bold shadow-lg shadow-[#0d94af]/20 hover:bg-[#0d94af]/90 flex items-center justify-center gap-2">
            Create Account
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  )
}

function Input({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-bold text-[#111718]">{label}</label>
      <input
        {...props}
        className="h-14 rounded-xl border border-[#dbe4e6] px-4 focus:border-[#0d94af] focus:ring-1 focus:ring-[#0d94af] outline-none"
      />
    </div>
  )
}
