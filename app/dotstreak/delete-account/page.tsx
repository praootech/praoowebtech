import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dot Streak — Account & Data Deletion",
  description:
    "How to request deletion of your Dot Streak account and associated data.",
};

export default function DotStreakDeleteAccountPage() {
  return (
    <article className="prose-none">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
        Dot Streak — Account &amp; Data Deletion
      </h1>
      <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
        Last updated: July 2026
      </p>

      <p className="mt-8 text-sm leading-6 text-slate-600 dark:text-slate-400">
        You can request deletion of your Dot Streak account and all
        associated data at any time, whether or not you still have the app
        installed.
      </p>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">
        How to request deletion
      </h2>
      <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
        Send an email to{" "}
        <a
          href="mailto:praootech@gmail.com?subject=Dot%20Streak%20account%20deletion%20request"
          className="text-blue-600 underline hover:no-underline dark:text-blue-400"
        >
          praootech@gmail.com
        </a>{" "}
        from the Google account you used to sign in, with the subject line
        &ldquo;Dot Streak account deletion request&rdquo;. We use the sending
        address to verify the request belongs to the account owner.
      </p>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">
        What gets deleted
      </h2>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
        <li>Your account record and Google account association.</li>
        <li>Your streak names and check-in history stored on our backend.</li>
        <li>
          Any Google Drive backup data stored in the app&rsquo;s hidden Drive
          folder, and the stored Drive authorization token.
        </li>
      </ul>
      <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
        Streak data kept only on your device is removed by uninstalling the
        app, independent of this request.
      </p>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">
        Timeframe
      </h2>
      <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
        We aim to process deletion requests within 30 days. Crash diagnostics
        already sent to our error-monitoring provider (Sentry) prior to your
        request follow Sentry&rsquo;s own retention schedule and are not
        individually deleted on request, as they are not used to identify
        you personally.
      </p>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">
        Contact us
      </h2>
      <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
        Questions about this process? Email{" "}
        <a
          href="mailto:praootech@gmail.com"
          className="text-blue-600 underline hover:no-underline dark:text-blue-400"
        >
          praootech@gmail.com
        </a>
        .
      </p>
    </article>
  );
}
