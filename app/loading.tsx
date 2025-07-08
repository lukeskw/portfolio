import spinner from '@/assets/images/spinner.svg'
import Image from 'next/image'

export default function Loading() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Image src={spinner} alt="" className="h-8 w-8 animate-spin" />
    </div>
  )
}
