import SocialAuthButtons from "./SocialButtons"
import EmailLoginForm from "./EmailLoginForm"
import { Divider } from "./Divider"
import Link from "next/link"


export default function LoginForm() {
return (
<div className="w-full max-w-110 flex flex-col">
<div className="mb-10">
<h2 className="text-3xl font-bold text-[#111718]  mb-2">Sign In</h2>
<p className="text-[#618389] dark:text-gray-400">
Enter your credentials to access your account
</p>
</div>


<SocialAuthButtons />
<Divider />
<EmailLoginForm />


<p className="mt-10 text-center text-sm font-medium text-[#618389] ">
Don&apos;t have an account?
<Link  className="font-bold text-primary hover:underline ml-1" href="/register"
>
 Sign up
</Link>
</p>
</div>
)
}