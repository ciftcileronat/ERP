import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        const username = credentials.username;
        const password = credentials.password;

        const user = await axios
          .post("http://localhost:3001/users/login", { username, password })
          .then((response) => {
            if (response.data.type == 0) {
              throw new Error(response.data.message);
            } else {
              return {
                id: response.data.id,
                username: response.data.username,
                email: response.data.email,
                fullname: response.data.fullname,
                isSysAdmin: response.data.isSysAdmin,
                isIt: response.data.isIt,
                isManager: response.data.isManager,
                isBoard: response.data.isBoard,
              };
            }
          });
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        console.log(user);
        /*
        token.id = user.id;
        token.username = user.username;
        token.email = user.email;
        */
        token.user = {
          id: user.id,
          username: user.username,
          email: user.email,
          fullname: user.fullname,
          isSysAdmin: user.isSysAdmin,
          isIt: user.isIt,
          isManager: user.isManager,
          isBoard: user.isBoard,
        };
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        /*
        session.id = token.id;
        session.username = token.username;
        session.email = token.email;
        */
        session.user = token.user;
      }
      return session;
    },
  },
  secret: process.env.JWT_SECRET,
  jwt: {
    secret: "test",
    encryption: true,
  },
  pages: {
    signIn: "/authentication/login",
  },
});
