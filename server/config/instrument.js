import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [
    Sentry.httpIntegration({ tracing: true }),        // traces HTTP requests
    Sentry.mongooseIntegration(),                     // traces Mongoose queries
    nodeProfilingIntegration(),                       // captures CPU profiling
  ],
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0,
  sendDefaultPii: true,
});

export default Sentry;
