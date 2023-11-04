import { redirect } from "next/navigation"

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  redirect('/en-US')
  return <h1>You're not suposed to come here</h1>
}