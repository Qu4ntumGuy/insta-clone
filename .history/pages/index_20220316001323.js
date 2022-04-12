import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className=" text-3xl text-blue-800 flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Instagram 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h1>Hello World!!</h1>
    </div>
  );
}
