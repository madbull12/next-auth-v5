import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex h-full flex-col gap-y-4 items-center justify-center primary-gradient">
      <h1 className=" text-white text-5xl font-thin">🔐 Auth</h1>
      <p className="text-white font-normal">Simple authentication service</p>
      <LoginButton asChild>
        <Button size={"lg"} className="bg-white hover:bg-slate-200 text-black" >
          Sign in
        </Button>
      </LoginButton>
    </main>
  );
}
