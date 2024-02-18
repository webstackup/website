import Image from "next/image";

export default function Home() {
  return (
    <section>
      <header>
        <Image
          src="webstackup-logo.svg"
          alt="WebStackup logo"
          width={100}
          height={100}
        />
        <h1>WebStackup</h1>
      </header>
      <main>
        <article>
          <p>
            We primarily specialize in Full Stack JavaScript development,
            adhering to web standards and best practices, utilizing modern web
            technologies such as HTML, CSS, TypeScript, React, React Native,
            Next.js, and Node.js to build and deliver high-quality solutions.
          </p>
        </article>
      </main>
    </section>
  );
}
