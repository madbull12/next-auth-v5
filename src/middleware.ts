import { auth } from "./auth"
export default auth((req) => {
  // req.auth
  console.log("shit", req.nextUrl.pathname)
})

// Optionally, don't invoke Middleware on some paths
// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
  }