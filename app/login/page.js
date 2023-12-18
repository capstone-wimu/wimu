import Image from "next/image";
import Link from "next/link";

export default function LogIn() {
  return (
    <section className="container mx-auto h-screen flex items-center justify-center">
      <Image
        className="logo"
        src="/logo.svg"
        alt="Logo"
        width={300}
        height={300}
        priority
      />
      <div className="container flex flex-col items-center justify-center gap-3 w-fit ml-10">
        <h1 className="text-3xl font-bold text-center mb-5">
          SELAMAT DATANG DI <br />
          WIM-U
        </h1>
        <button type="button" className="button btn-primary w-[450px]">
          Log In
        </button>
        <Link href="/signup" className="button btn-secondary w-[450px]">
          Sign Up!
        </Link>
      </div>
    </section>
  );
}
