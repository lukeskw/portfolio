import { t } from '@/app/translations/translation'
import { Stack } from './Stack'

interface StackComponentProps {
  language: string
}

export function StackComponent({ language }: StackComponentProps) {
  const languages = t[language]?.experience?.languages

  if (!languages || languages.length === 0) {
    return <p>{t[language]?.experience?.errorMsg}</p>
  }

  return (
    <>
      {languages.map((stack) => (
        <Stack key={stack.name} stack={stack} language={language} />
      ))}
    </>
  )
}
