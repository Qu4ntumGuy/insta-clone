import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";

const SignIn = ({ providers }) => {
  return (
    <>
      <Header />

      <div className=" flex flex-col items-center py-2 px-14">
        <img
          className="w-80"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
          alt=""
        />
        <p className=" font-sm italic">
          Welcome to Instagram Clone Application and have Fun..
        </p>
        <div className=" m-36">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className=" p-3 bg-blue-400 rounded-xl text-white"
                onClick={() => signIn(provider.id)}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
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
