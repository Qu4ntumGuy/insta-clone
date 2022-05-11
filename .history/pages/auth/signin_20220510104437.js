import { getProviders } from "next-auth/react";

const SignIn = ({providers}) => {
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

export default SignIn;
