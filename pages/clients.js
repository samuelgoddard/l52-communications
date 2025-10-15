import Layout from '@/components/layout'
import Header from '@/components/header'
import Container from '@/components/container'
import { fade, reveal } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ConditionalWrap from 'conditional-wrap';

import SanityPageService from '@/services/sanityPageService'

const query = `{
  "clients": *[_type == "clients"] | order(title) {
    title,
    logo {
      asset ->
    },
    recent,
    link
  }
}`

const pageService = new SanityPageService(query)

export default function Clients(initialData) {
  const { data: { clients }  } = pageService.getPreviewHook(initialData)()

  return (
    <Layout>
      <NextSeo title="Clients" />

      <Header alwaysBlack />

      <LazyMotion features={domAnimation}>
        <div className="lg:flex lg:flex-wrap lg:items-center lg:justify-center lg:min-h-screen bg-white">
          <m.div
            initial="initial"
            animate="enter"
            exit="exit"
            className="py-32 lg:py-40 w-full"
          >
              <m.div variants={fade}>
                <Container>
                  <div className="p-2 text-2xl lg:text-[32px] xs:p-4 font-display group italic text-center mx-auto">
                      <div className="overflow-hidden">
                        <m.div variants={reveal}>
                        <span className="block relative text-blue">
                            <span className="block relative z-10">Clients</span>
                        </span>
                        </m.div>
                      </div>
                    </div>

                      <ul className="flex flex-wrap items-center justify-center">
                        {clients.map((client, i) => {
                          return (
                            <li key={i} className="w-1/2 p-8 xs:p-8 xs:w-1/2 md:p-8 lg:p-10 xl:p-8 2xl:p-16 md:w-[18%] lg:w-[18%] xl:w-[18%]">

                              <ConditionalWrap
                                condition={!!client.link}
                                wrap={children => (
                                  <a
                                    href={client.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full hover:opacity-50 focus:opacity-50 transition-opacity ease-in-out duration-300"
                                  >
                                    {children}
                                  </a>
                                )}
                              >
                                <img src={client.logo.asset.url} alt={client.title} className="w-full" />
                              </ConditionalWrap>
                            </li>
                          )
                        })}
                      </ul>
                

                </Container>                  
                
              </m.div>
            
          </m.div>
        </div>
      </LazyMotion>
      
    </Layout>
  )
}

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return { 
    props: props
  };
}