import { type Metadata } from 'next'
import Image from 'next/image'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { SectionTitle } from '@/components/SectionTitle'
import { LeftRightBlueWhite } from '@/components/LeftRightBlueWhite'
import { buildCloudinaryUrl } from '@/utils/cloudinary'
import styles from './page.module.css'
import { BoxSection } from '@/components/BoxSection'
import { PropertyDetails } from '@/components/PropertyDetails'
import { Footer } from '@/components/Footer'

// New ArrowSections component
const ArrowSections: React.FC<{
  sections: { title: string; subtitle?: string; content: React.ReactNode }[]
}> = ({ sections }) => (
  <div className={styles.arrowSectionContainer}>
    {sections.map((section, index) => (
      <div key={index} className={styles.arrowSectionBox}>
        <div className={styles.arrowSectionTitleContainer}>
          <div className={styles.arrowSectionTitle}>{section.title}</div>
        </div>
        {section.subtitle && (
          <div className={styles.arrowSectionSubtitle}>{section.subtitle}</div>
        )}
        <div className={styles.arrowSectionContent}>{section.content}</div>
      </div>
    ))}
  </div>
)

export const metadata: Metadata = {
  description:
    'Realty Lease Finance Corporation provides upfront capital for leasing costs in exchange for direct payments from corporate tenants.',
}

export default function Home() {
  return (
    <>
      <Container className="mt-6 sm:mt-16 md:mt-24">
        <FadeIn>
          <div className="px-6 lg:px-8">
            <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-900 [text-wrap:balance] sm:text-7xl">
              Simple lease finance solutions for corporate tenants and landlords
            </h1>
            <p className="mt-6 text-xl text-neutral-600">
              Realty Lease Finance Corporation provides upfront capital to cover
              leasing costs, enabling lease-up to landlords, and certainty of
              timely funding to tenants and brokers.
            </p>
          </div>
        </FadeIn>
      </Container>

      <Container className="mt-24 rounded-4xl bg-neutral-100 py-20 sm:mt-32 lg:mt-40">
        <SectionIntro title="Market Dynamics">
          <p className="text-md mb-6 mt-6 text-neutral-600">
            Valuable Solutions for Both Tenants and Landlords
          </p>
          <LeftRightBlueWhite
            leftContent={
              <>
                <SectionTitle
                  text="Tenant Challenges"
                  style={{ color: 'white' }}
                />
                <List className="mt-4 text-white">
                  <ListItem invert={true}>
                    High TI needs; high quality office space required to attract
                    workers.
                  </ListItem>
                  <ListItem invert={true}>
                    Expectation that landlords will pay tenant improvement costs
                    in full; heavy tenant reluctance to invest in landlord
                    space.
                  </ListItem>
                  <ListItem invert={true}>
                    Tenant willing to pay higher rent for more tenant
                    improvements.
                  </ListItem>
                  <ListItem invert={true}>
                    Landlords increasingly deficient in reimbursing TI expenses
                    on-time and in-full as agreed in lease.
                  </ListItem>
                </List>
              </>
            }
            rightContent={
              <>
                <SectionTitle
                  text="RELEAF Solutions"
                  style={{ color: 'rgb(82 82 82)' }}
                />
                <List className="mt-4 text-neutral-600">
                  <ListItem>
                    TI allowance and commissions on-time and in-full
                  </ListItem>
                  <ListItem>
                    No landlord operating, solvency or credit risk
                  </ListItem>
                  <ListItem>
                    Rental obligations remain the same as original lease
                  </ListItem>
                  <ListItem>
                    Ability to up-size TI if necessary (with corresponding
                    increase in rental rate)
                  </ListItem>
                  <ListItem>Simple agreements with minimal legal work</ListItem>
                </List>
              </>
            }
          />
          <LeftRightBlueWhite
            containerStyle={{ marginTop: 20 }}
            leftContent={
              <>
                <SectionTitle
                  text="Landlord Challenges"
                  style={{ color: 'white' }}
                />
                <List className="mt-4 text-white">
                  <ListItem invert={true}>
                    Lease profile creates long &quot;J-curve&quot; returns for
                    each new lease
                  </ListItem>
                  <ListItem invert={true}>
                    Combination of higher operating expenses, higher
                    construction costs, higher interest rates and lower tenant
                    demand have put heavy pressure on cash flows and reserves
                  </ListItem>
                  <ListItem invert={true}>
                    Lenders are increasingly reluctant to fund TIs and cutting
                    back on TI facilities
                  </ListItem>
                  <ListItem invert={true}>
                    TI availability creating enormous competitive advantage to
                    attract tenants
                  </ListItem>
                </List>
              </>
            }
            rightContent={
              <>
                <SectionTitle
                  text="RELEAF Solutions"
                  style={{ color: 'rgb(82 82 82)' }}
                />
                <List className="mt-4 text-neutral-600">
                  <ListItem>
                    In most cases completely eliminates working capital pressure
                    and &quot;J-curve&quot;.
                  </ListItem>
                  <ListItem>
                    Allows to out-compete competition by offering generous TI
                    packages.
                  </ListItem>
                  <ListItem>
                    Immediately positive cash flow to at least partially absorb
                    operating expenses.
                  </ListItem>
                  <ListItem>Asset improved with upgraded space.</ListItem>
                  <ListItem>
                    No more reliance on capricious lenders; no more delayed
                    reimbursements.
                  </ListItem>
                  <ListItem>
                    Meaningful leasing now possible even with minimal cash,
                    reserves & working capital.
                  </ListItem>
                </List>
              </>
            }
          />
        </SectionIntro>
      </Container>

      <Container className="relative isolate mt-24 overflow-hidden rounded-4xl bg-gray-900 py-20 text-white sm:mt-32 lg:mt-40">
        <SectionIntro title="Contact Us" invert={true}>
          <p className="text-md mt-6 text-white">
            For more information please contact your leasing agent or contact us
            directly at{' '}
            <a
              href="mailto:info@realtyleasefinance.com"
              className="font-semibold underline decoration-2 transition-colors hover:text-[#7775D6]"
            >
              info@realtyleasefinance.com
            </a>
          </p>
        </SectionIntro>
        <svg
          viewBox="0 0 1024 1024"
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        >
          <circle
            r={512}
            cx={512}
            cy={512}
            fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
      </Container>

      <Footer />
    </>
  )
}
