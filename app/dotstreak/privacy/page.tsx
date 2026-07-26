import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dot Streak — Privacy Policy",
  description: "Privacy Policy for the Dot Streak mobile app.",
};

export default function DotStreakPrivacyPage() {
  return (
    <article className="prose-none">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
        Dot Streak — Privacy Policy
      </h1>
      <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
        Last updated: July 2026
      </p>

      <p className="mt-8 text-sm leading-6 text-slate-600 dark:text-slate-400">
        Dot Streak (&ldquo;the app&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;)
        is developed by Praootech. This policy explains what information the
        app collects, why, and how it is used.
      </p>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">
        Information we collect
      </h2>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
        <li>
          <strong className="text-slate-900 dark:text-white">
            Google account information.
          </strong>{" "}
          When you sign in with Google, we receive your name, email address,
          and Google account ID, used to identify your account and keep your
          streaks associated with you.
        </li>
        <li>
          <strong className="text-slate-900 dark:text-white">
            Google Drive backup access.
          </strong>{" "}
          If you enable backup, the app requests access to a hidden,
          app-specific Drive folder (the{" "}
          <code className="rounded bg-slate-100 px-1 py-0.5 text-xs dark:bg-white/10">
            drive.appdata
          </code>{" "}
          scope). This folder is not visible in your regular Google Drive and
          is used solely to store and restore your streak data. We never
          request access to your other Drive files.
        </li>
        <li>
          <strong className="text-slate-900 dark:text-white">
            Crash and diagnostic data.
          </strong>{" "}
          We use Sentry to capture crash reports and error diagnostics,
          including device model, OS version, and stack traces, so we can fix
          bugs. This data is not used to identify you personally beyond what
          is necessary to investigate a crash.
        </li>
        <li>
          <strong className="text-slate-900 dark:text-white">
            Streak and reminder data.
          </strong>{" "}
          The names of streaks you create and their check-in history are
          stored to power the app&rsquo;s core functionality, including
          scheduled reminder notifications.
        </li>
      </ul>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">
        How we use this information
      </h2>
      <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
        We use the information above to operate the app&rsquo;s core
        features: signing you in, backing up and restoring your data,
        sending local reminder notifications, generating short AI nudge
        messages based on the names of streaks you have not yet checked in
        today, and diagnosing crashes. We do not sell your data, and we do
        not use it for advertising.
      </p>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">
        Who we share it with
      </h2>
      <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
        Your Google ID token and Drive authorization are sent to our backend
        service, which verifies your identity and exchanges tokens on your
        behalf. Crash diagnostics are sent to Sentry, our error-monitoring
        provider. We do not share your information with any other third
        party.
      </p>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">
        Your choices
      </h2>
      <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
        You can sign out of the app at any time, and you can revoke Dot
        Streak&rsquo;s access to your Google account from your{" "}
        <a
          href="https://myaccount.google.com/permissions"
          className="text-blue-600 underline hover:no-underline dark:text-blue-400"
        >
          Google Account permissions page
        </a>
        . To request deletion of your account and associated data, see our{" "}
        <a
          href="/dotstreak/delete-account"
          className="text-blue-600 underline hover:no-underline dark:text-blue-400"
        >
          Account &amp; Data Deletion
        </a>{" "}
        page.
      </p>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">
        Children&rsquo;s privacy
      </h2>
      <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
        Dot Streak is not directed at children under 13, and we do not
        knowingly collect information from them.
      </p>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">
        Changes to this policy
      </h2>
      <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
        We may update this policy from time to time. Material changes will be
        reflected by updating the &ldquo;Last updated&rdquo; date above.
      </p>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">
        Contact us
      </h2>
      <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
        Questions about this policy? Email us at{" "}
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
