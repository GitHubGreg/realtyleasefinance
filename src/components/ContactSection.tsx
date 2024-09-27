import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Contact us
            </h2>
            <div className="mt-10 border-t border-white/10 pt-10">
              <div className="mt-6 text-base text-neutral-400">
                <h3 className="font-semibold text-white">Group RMC</h3>
                <p>One World Trade Center</p>
                <p>Suite 83G</p>
                <p>New York, NY 10007</p>
                <p className="mt-4">
                  <a
                    href="mailto:info@grouprmcusa.com"
                    className="text-neutral-400 hover:text-white"
                  >
                    info@grouprmcusa.com
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+19175039730"
                    className="text-neutral-400 hover:text-white"
                  >
                    917-503-9730
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="text-md mx-auto mt-24 max-w-7xl text-neutral-400">
            <p>
              The information on this website is intended solely for the benefit
              of firms and companies seeking private equity investment capital
              by providing general information on our services and philosophy.
              The material on this site is for informational purposes only and
              does not constitute an offer or solicitation to purchase any
              investment solutions or a recommendation to buy or sell a security
              nor is it to be construed as investment advice. Additionally, the
              material on this site does not constitute a representation that
              the solutions described therein are suitable or appropriate for
              any person.
            </p>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
