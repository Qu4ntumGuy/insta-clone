import { async } from "@firebase/util";

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
