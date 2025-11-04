export default function Footer() {
  return (
    <footer className="mt-20 border-t">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col-reverse items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            ? {new Date().getFullYear()} Studio Arc. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer noopener"
              className="underline-offset-4 hover:underline"
            >
              Instagram
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noreferrer noopener"
              className="underline-offset-4 hover:underline"
            >
              Pinterest
            </a>
            <a href="mailto:hello@studioarc.design" className="underline-offset-4 hover:underline">
              hello@studioarc.design
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
