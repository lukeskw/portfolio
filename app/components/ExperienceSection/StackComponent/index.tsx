// import reactIcon from '@/assets/images/react-icon.svg'
// import javascriptIcon from '@/assets/images/javascript-icon.svg'
// import typescriptIcon from '@/assets/images/typescript-icon.svg'
// import phpIcon from '@/assets/images/php-icon.svg'
// import laravelIcon from '@/assets/images/laravel-icon.svg'
// import mysqlIcon from '@/assets/images/mysql-icon.svg'
import Image from 'next/image'
import { t } from '@/app/translations/translation'

interface StackComponentProps {
  language: string
}

function getStackIcon(name: string): string {
  type StackIconsProps = {
    [key: string]: string
  }

  const stackIcons: StackIconsProps = {
    react: require('@/assets/images/react-icon.svg'),
    javascript: require('@/assets/images/javascript-icon.svg'),
    typescript: require('@/assets/images/typescript-icon.svg'),
    php: require('@/assets/images/php-icon.svg'),
    laravel: require('@/assets/images/laravel-icon.svg'),
    mysql: require('@/assets/images/mysql-icon.svg'),
  }

  return stackIcons[name] || ''
}

export function StackComponent({ language }: StackComponentProps) {
  const languages = t[language]?.experience?.languages

  if (!languages || languages.length === 0) {
    return <p>{t[language]?.experience?.errorMsg}</p>
  }

  return (
    <>
      {languages.map((stack) => (
        <div key={stack.name} className="flex gap-3">
          <Image
            src={getStackIcon(stack.name)}
            width={36}
            height={36}
            className="h-icon w-icon"
            alt={`${stack.name}-icon`}
          />
          <div className="flex w-full rounded-full border border-zinc-500">
            <div
              className={`flex w-${
                stack.years !== 4 ? `${stack.years}/4` : 'full'
              } items-center justify-center rounded-full
        bg-gradient-to-br from-slate-300 via-slate-500 to-slate-800`}
            >
              <span className="font-semibold text-white">
                {stack.years > 1 ? `${stack.years} anos` : `${stack.years} ano`}
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

{
  /* <div className="flex gap-3">
    <Image
      src={javascriptIcon}
      width={36}
      height={36}
      className="h-icon w-icon"
      alt="javascript-icon"
    />
    <div className="flex w-full rounded-full border border-zinc-500">
      <div
        className="flex w-3/4 items-center justify-center rounded-full
    bg-gradient-to-br from-slate-300 via-slate-500 to-slate-800"
      >
        <span className="font-semibold text-white">3 anos</span>
      </div>
    </div>
  </div>
  <div className="flex gap-3">
    <Image
      src={typescriptIcon}
      width={36}
      height={36}
      className="h-icon w-icon"
      alt="typescript-icon"
    />
    <div className="flex w-full rounded-full border border-zinc-500">
      <div
        className="flex w-1/4 items-center justify-center rounded-full
    bg-gradient-to-br from-slate-300 via-slate-500 to-slate-800"
      >
        <span className="font-semibold text-white">1 ano</span>
      </div>
    </div>
  </div>
  <div className="flex gap-3">
    <Image
      src={phpIcon}
      width={36}
      height={36}
      className="h-icon w-icon scale-110"
      alt="php-icon"
    />
    <div className="flex w-full rounded-full border border-zinc-500">
      <div
        className="flex w-full items-center justify-center rounded-full
    bg-gradient-to-br from-slate-300 via-slate-500 to-slate-800"
      >
        <span className="font-semibold text-white">4 anos</span>
      </div>
    </div>
  </div>
  <div className="flex gap-3">
    <Image
      src={laravelIcon}
      width={36}
      height={36}
      className="h-icon w-icon scale-90"
      alt="laravel-icon"
    />
    <div className="flex w-full rounded-full border border-zinc-500">
      <div
        className="flex w-3/4 items-center justify-center rounded-full
    bg-gradient-to-br from-slate-300 via-slate-500 to-slate-800"
      >
        <span className="font-semibold text-white">3 anos</span>
      </div>
    </div>
  </div>
  <div className="flex gap-3">
    <Image
      src={mysqlIcon}
      width={36}
      height={36}
      className="h-icon w-icon scale-90"
      alt="mysql-icon"
    />
    <div className="flex w-full rounded-full border border-zinc-500">
      <div
        className="flex w-3/4 items-center justify-center rounded-full
    bg-gradient-to-br from-slate-300 via-slate-500 to-slate-800"
      >
        <span className="font-semibold text-white">3 anos</span>
      </div>
    </div> */
}
