import { CircleNotch } from '@phosphor-icons/react/dist/ssr'

export default function Loading() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <CircleNotch className="h-8 w-8 animate-spin" />
    </div>
  )
}
