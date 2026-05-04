'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="relative flex min-h-[calc(100vh-12rem)] flex-col items-center justify-center px-4 text-center">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/5 blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Error icon */}
        <div className="animate-fade-in-up mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-red-500/10 ring-1 ring-red-500/20">
          <svg
            className="h-12 w-12 text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        {/* Content */}
        <h1 className="animate-fade-in-up delay-100 mb-4 text-3xl font-bold tracking-tight text-white">
          Something went wrong
        </h1>
        <p className="animate-fade-in-up delay-200 mb-8 max-w-md text-lg text-zinc-400">
          An unexpected error occurred. Please try again or contact support if the problem persists.
        </p>

        {/* Action */}
        <button
          onClick={reset}
          className="animate-fade-in-up delay-300 btn-primary inline-flex items-center gap-2"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Try again
        </button>
      </div>
    </div>
  );
}
