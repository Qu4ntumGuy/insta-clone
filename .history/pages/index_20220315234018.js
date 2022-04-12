import Head from "next/head";

export default function Home() {
  return (
    <div className=" text-3xl text-blue-800 flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Instagram 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello World!!</h1>
    </div>
  );
}
