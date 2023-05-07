import dbObj from "@/libs/mongo"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import NextAuth, { NextAuthOptions } from "next-auth"


export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
  ],
  adapter: MongoDBAdapter(dbObj.clientProm),
  session: {
    strategy: "jwt"
  }
}

export default NextAuth(authOptions)