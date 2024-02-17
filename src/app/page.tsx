import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start">
      <header className="flex flex-col items-center justify-start p-5">
        <Image src="logo.svg" alt="WebStackup" width={100} height={100} />
        <h1 className="text-4xl bg-gradient-to-b from-[#f90] to-[#f50] inline-block text-transparent bg-clip-text">
          WebStackup
        </h1>
      </header>
      <main className="p-5">
        <p className="text-lg p-2">
          We focuses on full stack JavaScript development using TypeScript,
          React, Next and Node technologies
        </p>
      </main>
    </div>
  );
}
