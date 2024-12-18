import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'

const navigation = [
  {
    title: 'Work',
    links: [
      { title: 'FamilyFund', href: '/work/family-fund' },
      { title: 'Unseal', href: '/work/unseal' },
      { title: 'Phobia', href: '/work/phobia' },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: '/work',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'About', href: '/about' },
      { title: 'Process', href: '/process' },
      { title: 'Blog', href: '/blog' },
      { title: 'Contact us', href: '/contact' },
    ],
  },
  {
    title: 'Connect',
    links: socialMediaProfiles,
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="text-md font-display font-semibold tracking-wider text-neutral-900">
              {section.title}
            </div>
            <ul role="list" className="text-md mt-4 text-neutral-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-900"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

function NewsletterForm() {
  return (
    <form className="max-w-sm">
      <h2 className="text-md font-display font-semibold tracking-wider text-neutral-900">
        Sign up for our newsletter
      </h2>
      <p className="text-md mt-4 text-neutral-700">
        Subscribe to get the latest design news, articles, resources and
        inspiration.
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          placeholder="Email address"
          autoComplete="email"
          aria-label="Email address"
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-900 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-900 focus:outline-none focus:ring-neutral-900/5"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-900 text-white transition hover:bg-neutral-800"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 px-0 sm:mt-32 lg:mt-40 lg:px-0">
      <FadeIn>
        <div className="mt-24 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t border-neutral-900/10 pt-12">
          <div className="text-sm text-neutral-700">
            <div className="font-semibold leading-snug">
              Realty Lease Finance Corp
            </div>
            <div className="leading-snug">One World Trade Center</div>
            <div className="leading-snug">Suite 83G</div>
            <div className="leading-snug">New York, NY 10007</div>
          </div>

          <Logo />
          <div className="mx-auto mb-6 max-w-7xl text-xs text-neutral-400">
            ©{new Date().getFullYear()} Realty Lease Finance Corp. All rights
            reserved. The information on this website is intended solely for the
            benefit of firms and companies seeking private equity investment
            capital by providing general information on our services and
            philosophy. The material on this site is for informational purposes
            only and does not constitute an offer or solicitation to purchase
            any investment solutions or a recommendation to buy or sell a
            security nor is it to be construed as investment advice.
            Additionally, the material on this site does not constitute a
            representation that the solutions described therein are suitable or
            appropriate for any person.
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
