import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      synchronize: false
    }),
    // ...add more providers here
  ],

  pages: {
    // Configure pages
    signIn: "/auth/signin",
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session.user.name
        .split(" ")
        .join("_")
        .toLowerCase();

      session.user.uid = token.sub;
      return session;

    },
  },

  //   theme: {
  //     logo: "https://github.com/Qu4ntumGuy/myfirstsite/blob/main/images/Gaurav.png?raw=true",
  //     brandColor: "#00a8ff",
  //     colorScheme: auto,
  //   },
});
