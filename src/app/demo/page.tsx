// demo page for jelly ui utilising all the components

import Link from 'next/link'

export default function Showcase() {
    return (
    <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">
      <div className="flex h-full flex-col justify-center">
        <p className="font-display text-sm font-medium text-slate-900 dark:text-white">
          COMPONENT SHOWCASE
        </p>

        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            This is a demo page for Jelly UI

        </p>

        <Link
          href="/"
          className="mt-8 text-sm font-medium text-slate-900 dark:text-white"
        >
          Go back home
        </Link>
      </div>
    </div>
    )
}

