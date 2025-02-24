import NextAuth from "next-auth";
import OAuthProvider from "next-auth/providers/oauth";

export const handler = NextAuth({
  providers: [
    //@ts-expect-error outhProvider isservice provider
    OAuthProvider({
      id: "zoho",
      name: "Zoho",
      clientId: process.env.ZOHO_CLIENT_ID || "",
      clientSecret: process.env.ZOHO_CLIENT_SECRET || "",
      authorization: {
        url: "https://accounts.zoho.com/oauth/v2/auth",
        params: {
          scope:
            "AaaServer.profile.Read,ZohoCalendar.events.CREATE,ZohoCalendar.events.READ",
          response_type: "code",
        },
      },
      token: "https://accounts.zoho.com/oauth/v2/token",
      userinfo: "https://www.zohoapis.com/crm/v2/users/me",
      //@ts-expect-error "typing
      profile(profile) {
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          image: profile.avatar,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account?.access_token) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      //@ts-expect-error Session typing
      session.accessToken = token.accessToken;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
