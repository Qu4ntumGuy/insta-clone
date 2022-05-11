import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],

  pages: {
      // Configure pages
      
  }



//   theme: {
//     logo: "https://github.com/Qu4ntumGuy/myfirstsite/blob/main/images/Gaurav.png?raw=true",
//     brandColor: "#00a8ff",
//     colorScheme: auto,
//   },
});
