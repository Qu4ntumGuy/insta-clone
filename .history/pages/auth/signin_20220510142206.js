import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";

const SignIn = ({ providers }) => {
  return (
    <>
    <Header />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className=" bg-blue-400 rounded-xl text-white" onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default SignIn;
