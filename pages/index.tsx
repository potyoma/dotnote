import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>.note</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="dotted-bg"
        style={{ width: "device-width", maxHeight: "100%" }}
      ></div>
    </div>
  );
}
