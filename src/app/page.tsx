import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-5 py-20">
      <Image
        src="webstackup-logo.svg"
        alt="WebStackup logo"
        width={100}
        height={100}
      />
      <h1 className="text-4xl text-transparent inline-block bg-gradient-to-b from-[#f90] to-[#f50] bg-clip-text p-2">
        WebStackup
      </h1>
      <p className="text-lg py-5 text-center max-w-lg">
        We focuses on <strong>Full Stack JavaScript</strong> development using
        TypeScript, React, Next.js and Node.js technologies
      </p>
    </main>
  );
}
