import { redirect } from 'next/navigation'

export default function Page() {
  redirect('/en-US')

  return <h1>You're not suposed to come here</h1>
}