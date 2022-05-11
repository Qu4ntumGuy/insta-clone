import { getProviders, signIn } from "next-auth/react";

const signIn = ({providers}) => {
  return (
    <div>
      <h1>Sign In</h1>
    </div>
  );
};

export async function getServerSideProps() {
   const providers = getProviders();

   return {
      props: {
         providers,
      }
   }
}

export default signIn;
