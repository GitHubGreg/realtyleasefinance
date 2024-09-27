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

export const metadata: Metadata = {
  description:
    'Realty Lease Finance Corporation provides upfront capital for leasing costs in exchange for direct payments from corporate tenants.',
}

export default function Home() {
  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Realty Lease Finance (RELEAF)
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Realty Lease Finance Corporation provides upfront capital for
            leasing costs in exchange for direct payments from corporate
            tenants. RELEAF transactions are generally structured as five-year
            cash flow streams with an annual cash yield of 25.5% to investors.
          </p>
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <SectionIntro title="Offering Overview">
          <PropertyDetails
            title="Offering Overview"
            detailSpecs1={[
              { title: 'Entity', value: 'RELEAF Portfolio LP' },
              { title: 'Inception', value: 'Q4 2024' },
              { title: 'Investment Type', value: 'Promissory Note' },
              { title: 'Currency', value: 'USD' },
              { title: 'Net Rate', value: '10%' },
              { title: 'Amortization', value: '5 Years; Monthly' },
            ]}
            detailSpecs2={[
              { title: 'Term', value: '5 Years' },
              {
                title: 'Annual Return',
                value: '25.5% Net Cash-on-Cash / 10% Net IRR',
              },
              {
                title: 'Distributions',
                value: 'Quarterly starting first full quarter after funding',
              },
              { title: 'Total Payments', value: '20' },
              { title: 'Leverage', value: 'None' },
              { title: 'Avg Annual Interest Spread', value: '1.2%' },
            ]}
            detailSpecs3={[
              { title: 'Management Fee', value: 'None' },
              { title: 'Performance Fee', value: 'None' },
              {
                title: 'Minimum Investment',
                value:
                  "$250,000 subject to GP's discretion to accept lesser amount",
              },
              { title: 'Closings', value: 'Monthly' },
            ]}
          />
        </SectionIntro>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <SectionIntro title="RELEAF Mechanics">
          <p className="mt-6 text-sm text-neutral-600">
            Specialized Direct Lease Payments from High Quality Corporate
            Tenants
          </p>
          <p className="mt-4 text-sm text-blue-800">Corporate Lease</p>
          <div className="mt-8 flex flex-col items-center">
            <div className="mb-5 w-3/4 rounded bg-blue-800 p-4 text-center text-white">
              <h3 className="text-2xl font-bold">RENTAL INCOME</h3>
              <p className="mt-2 text-sm">New "Financing Technology"</p>
            </div>
            <div className="flex w-full justify-between">
              <BoxSection
                title="RELEAF"
                subtitle="Realty Lease Finance Corp"
                body={
                  <>
                    <p>
                      Portion of rental income for the first five years of the
                      lease agreement is directly paid to RELEAF.
                    </p>
                    <p>
                      RELEAF has direct contracts with high quality corporate
                      tenants; no landlord risk.
                    </p>
                  </>
                }
                parentClass={styles.boxStyleConnected}
              />
              <BoxSection
                title="LANDLORD"
                body={
                  <>
                    <p>
                      For the first five years, the balance of the rental income
                      after RELEAF payments are paid directly to landlord by
                      tenant.
                    </p>
                    <p>
                      Landlord immediately benefits from increased occupancy and
                      after five years collects full lease income.
                    </p>
                  </>
                }
                parentClass={styles.boxStyleConnected}
              />
            </div>
          </div>
        </SectionIntro>
      </Container>

      <Container className="mt-24 bg-neutral-100 py-20 sm:mt-32 lg:mt-40">
        <SectionIntro title="Market Dynamics">
          <p className="mt-6 text-sm text-neutral-600">
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
                  <ListItem>
                    High TI needs; high quality office space required to attract
                    workers.
                  </ListItem>
                  <ListItem>
                    Expectation that landlords will pay tenant improvement costs
                    in full; heavy tenant reluctance to invest in landlord
                    space.
                  </ListItem>
                  <ListItem>
                    Tenant willing to pay higher rent for more tenant
                    improvements.
                  </ListItem>
                  <ListItem>
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
                  style={{ color: '#666' }}
                />
                <List className="mt-4 text-neutral-600">
                  <ListItem>
                    Provides upfront funding for tenant improvements.
                  </ListItem>
                  <ListItem>
                    Allows for higher rent in exchange for better TI packages.
                  </ListItem>
                  <ListItem>
                    Ensures on-time and in-full reimbursement of TI expenses.
                  </ListItem>
                  <ListItem>
                    Reduces tenant risk associated with landlord deficiencies.
                  </ListItem>
                </List>
              </>
            }
          />
        </SectionIntro>
      </Container>

      {/* Add Case Study section here */}

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <SectionIntro title="RELEAF Underwriting">
          <p className="mt-6 text-sm text-neutral-600">High Quality Credit</p>
          <p className="mt-4 text-sm text-blue-800">Current Pipeline</p>
          <div className="mt-8 flex flex-wrap justify-between">
            <div className="w-full p-4 md:w-1/2">
              <p className="mb-4 text-center text-sm text-neutral-600">
                RELEAF Pipeline-Tenant Industry Composition
              </p>
              <Image
                src={buildCloudinaryUrl(
                  'v1727229105/opportunities/RELEAF/releaf-pipeline-categories_gqirzo.png',
                )}
                alt="RELEAF Pipeline Categories"
                width={520}
                height={520}
              />
            </div>
            <div className="w-full p-4 md:w-1/2">
              <p className="mb-4 text-center text-sm text-neutral-600">
                RELEAF Pipeline-Tenant Industry Composition
              </p>
              <Image
                src={buildCloudinaryUrl(
                  'v1727230851/opportunities/RELEAF/releaf-pipeline-listed-not-listed-v2_sjtfuv.png',
                )}
                alt="RELEAF Pipeline Listed vs Not Listed"
                width={520}
                height={520}
              />
            </div>
          </div>
          <Image
            src={buildCloudinaryUrl(
              'v1727231321/opportunities/RELEAF/releaf-logos_y1kpcb.png',
            )}
            alt="RELEAF Logos"
            width={1120}
            height={200}
            className="mt-10"
          />
        </SectionIntro>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <SectionIntro title="Downside Protection">
          <p className="mt-6 text-sm text-neutral-600">
            RELEAF Risk Mitigation
          </p>
          <div className="mt-8 flex flex-wrap justify-between">
            <BoxSection
              title="Tenant Credit Risk"
              body={
                <>
                  <p className="font-bold">
                    To protect against risk of tenant default:
                  </p>
                  <ul className="mt-2 list-disc pl-5">
                    <li>
                      Focus on securing large tenants with good credit and
                      strong financials
                    </li>
                    <li>
                      Tenants required to provide full financial package for
                      credit analysis
                    </li>
                    <li>
                      Failure of tenant to make RELEAF payments triggers lease
                      default
                    </li>
                    <li>
                      RELEAF recovery rights have priority in the event of
                      tenant default
                    </li>
                  </ul>
                </>
              }
              parentClass={styles.boxStyle}
            />
            <BoxSection
              title="Landlord Performance Risk"
              body={
                <>
                  <p className="font-bold">
                    To protect against risk of landlord not fulfilling their
                    lease obligations:
                  </p>
                  <ul className="mt-2 list-disc pl-5">
                    <li>
                      Work exclusively with high-quality, well-capitalized
                      landlords
                    </li>
                    <li>
                      Missed RELEAF payments from landlord default triggers
                      landlord guarantee to RELEAF
                    </li>
                  </ul>
                </>
              }
              parentClass={styles.boxStyle}
            />
            <BoxSection
              title="Tenant Improvement Risk"
              body={
                <>
                  <p className="font-bold">
                    To protect against risk of misallocated tenant improvement
                    funds:
                  </p>
                  <ul className="mt-2 list-disc pl-5">
                    <li>
                      Work exclusively with reputable landlords and management
                      companies
                    </li>
                    <li>
                      RELEAF manages the entire tenant improvement process
                    </li>
                  </ul>
                </>
              }
              parentClass={styles.boxStyle}
            />
          </div>
        </SectionIntro>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <SectionIntro title="RELEAF Structure">
          <p className="mt-6 text-sm text-neutral-600">RELEAF Portfolio LP</p>
          <Image
            src={buildCloudinaryUrl(
              'v1727232084/opportunities/RELEAF/releaf-structure_dxu43m.png',
            )}
            alt="RELEAF Structure"
            width={1120}
            height={630}
            className="mt-8"
          />
        </SectionIntro>
      </Container>

      <ContactSection />
    </>
  )
}