import Link from 'next/link'

export default function FooterSection() {
  return (
    <footer className="mt-16 flex w-full items-center justify-center text-xs text-zinc-500">
      Made with ❤ by
      <Link href="https://github.com/lukeskw/" className="ml-1 underline">
        Luke
      </Link>
      , design improvements by
      <Link
        href="https://www.behance.net/leonardopt"
        className="ml-1 underline"
      >
        Leo
      </Link>
    </footer>
  )
}
