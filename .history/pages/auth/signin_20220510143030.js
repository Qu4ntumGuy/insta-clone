import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";

const SignIn = ({ providers }) => {
  return (
    <>
    <Header />

      <div>

         <img className="w-80" src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png" alt=""/>
         <p className=" font-sm italic">
            Welcome to Instagram Clone Application and have Fun..
         </p>
         <div>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className=" p-3 bg-blue-400 rounded-xl text-white" onClick={() => signIn(provider.id)}>
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
