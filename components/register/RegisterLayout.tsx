import RegisterHero from "./RegisterHero"
import RegisterForm from "./RegisterForm"

export default function RegisterLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col lg:flex-row">
      <RegisterHero />
      <RegisterForm />
    </div>
  )
}
