// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs'

Sentry.init({
	dsn: 'https://720c2cd59d0f4496b09db599832cfbd4@o508348.ingest.sentry.io/6632775',

	// Adjust this value in production, or use tracesSampler for greater control
	tracesSampleRate: 0.2,

	// Setting this option to true will print useful information to the console while you're setting up Sentry.
	debug: false,
})
