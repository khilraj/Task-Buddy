import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ['/','/features', '/about-us', '/FAQs', '/api/webhooks/clerk', '/forgot'],
  debug: true,
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
