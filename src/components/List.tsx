import clsx from 'clsx'

import { Border } from '@/components/Border'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

export function List({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <FadeInStagger>
      <ul role="list" className={clsx('text-base text-neutral-600', className)}>
        {children}
      </ul>
    </FadeInStagger>
  )
}

export function ListItem({
  children,
  title,
  invert = false,
}: {
  children: React.ReactNode
  title?: string
  invert?: boolean
}) {
  return (
    <li className="group mt-4 first:mt-0">
      <FadeIn>
        <Border
          invert={invert}
          className="pt-4 group-first:pt-0 group-first:before:hidden group-first:after:hidden"
        >
          {title && (
            <strong className="font-semibold text-neutral-900">{`${title}. `}</strong>
          )}
          {children}
        </Border>
      </FadeIn>
    </li>
  )
}
