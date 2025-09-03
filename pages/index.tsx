import { useRef } from "react";
import ConfettiCanvas, { ConfettiCanvasRef } from "../components/ConfettiCanvas";
import SillyGeese from "../components/Icons/SillyGeese";
import Head from "next/head";

export default function Home() {
  const confettiRef = useRef<ConfettiCanvasRef>(null);
  return (
    <>
      <Head>
        <title>Peter & Christina — Wedding</title>
        <meta name="description" content="Join us for our wedding celebration in Fall 2026! More details coming soon." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ConfettiCanvas ref={confettiRef} />
      <main className="container">
        <div className="hero">
          <h1 className="names">
            <span className="peter">Peter</span>{" "}
            <span className="and">&</span><br />{" "}
            <span className="christina">Christina</span>
          </h1>
          <p className="sub-title">Are Getting Married!</p>
        </div>
        <SillyGeese isColor />
        <div className="content">
          <p>We can't wait to celebrate with our favourite people — more details coming soon.</p>
          <button className="primary-btn" onClick={() => confettiRef.current?.fireConfetti()}>Fall 2026</button>
        </div>
      </main>
    </>
  );
}
