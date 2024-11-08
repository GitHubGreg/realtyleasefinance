import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'

export function ContactSection() {
  return (
    <Container className="mt-24 rounded-4xl bg-neutral-100 py-20 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-8 py-12 sm:mx-0 sm:py-16 md:px-16">
        <div className="max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Contact us
            </h2>
            <div className="mt-10 border-t border-white/10 pt-10">
              <div className="mt-6 text-base text-neutral-400">
                <h3 className="font-semibold text-white">
                  Realty Lease Finance Corp
                </h3>
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
        </div>
      </FadeIn>
    </Container>
  )
}
