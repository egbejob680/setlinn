import { AuthVisual } from "./AuthVisuals";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col lg:flex-row overflow-hidden">
     <AuthVisual/>
      <div className="flex w-full flex-col lg:w-1/2 bg-white  items-center justify-center px-6 py-12">
        {children}
      </div>
    </div>
  );
}
