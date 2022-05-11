import { getProviders, signIn } from "next-auth/react";

const signIn = () => {
  return (
    <div>
      <h1>Sign In</h1>
    </div>
  );
};

export async function getServerSideProps() {
   const providers = getProviders();
}

export default signIn;
