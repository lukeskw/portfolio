'use client'
import Image from 'next/image'
import { t } from '@/app/translations/translation'
import { getStackIcon } from '@/app/utils/getStackIcon'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import * as Tooltip from '@radix-ui/react-tooltip'
import { useEffect } from 'react'

interface StackProps {
  stack: { name: string; years: number }
  language: string
}

export function Stack({ stack, language }: StackProps) {
  const iconSrc = getStackIcon(stack.name)
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView) {
      controls.start({
        width:
          stack.years === 1
            ? '30%'
            : stack.years !== 6
              ? `${(stack.years / 6) * 100}%`
              : '100%',
        opacity: 1,
      })
    }
  }, [controls, inView, stack.years])

  return (
    <div key={stack.name} className="flex gap-3" ref={ref}>
      <Tooltip.Provider delayDuration={300}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button className="cursor-default hover:opacity-80">
              <Image
                src={iconSrc}
                width={40}
                height={40}
                className="h-icon w-icon"
                alt={`${stack.name}-icon`}
              />
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className="rounded bg-sky-800 p-4 text-sm text-zinc-300 shadow-sm shadow-sky-900"
              sideOffset={3}
            >
              {stack.name === 'php'
                ? stack.name.toUpperCase()
                : stack.name.charAt(0).toUpperCase() + stack.name.slice(1)}
              <Tooltip.Arrow className="fill-sky-800" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
      <motion.div className="flex h-8 w-full rounded-full border border-zinc-800 shadow-md shadow-zinc-900">
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={controls}
          className="flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-sky-700"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="cursor-default text-xs font-semibold text-white md:text-base"
          >
            {stack.years > 1
              ? `${stack.years} ${t[language]?.experience?.yearPlural}`
              : `${stack.years} ${t[language]?.experience?.year}`}
          </motion.span>
        </motion.div>
      </motion.div>
    </div>
  )
}
