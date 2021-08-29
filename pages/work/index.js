import Layout from '@/components/layout'
import Header from '@/components/header'
import Container from '@/components/container'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Carousel from '@/components/carousel'

import SanityPageService from '@/services/sanityPageService'

const query = `{
  "work": *[_type == "work"]{
    title,
    client,
    date,
    teaserImage {
      asset ->
    },
    slug {
      current
    }
  },
  "categories": *[_type == "categories"]{
    slug {
      current
    },
    _id,
    _type,
    title,
    "relatedWork": *[_type == "work" && references(^._id)]{
      title,
      client,
      date,
      teaserImage {
        asset ->
      },
      slug {
        current
      }
    }
  }
}`

const pageService = new SanityPageService(query)

export default function WorkIndex(initialData) {
  const { data: { work, categories }  } = pageService.getPreviewHook(initialData)()

  const scrollToTarget = (e) => {
    e.preventDefault();
    var target = e.target.dataset.target;
    var element = document.getElementById(target);
    element.scrollIntoView({
      behavior: "smooth", block: "start", inline: "nearest"
    });
  }

  return (
    <Layout>
      <NextSeo title="Work" />

      <Header />

      <LazyMotion features={domAnimation}>
        
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="py-32 lg:py-40"
        >
          
            <m.div variants={fade}>

              <Container>

                <h1 className="text-center text-2xl lg:text-[40px]">Selected Work</h1>

                <ul className="flex flex-wrap justify-center max-w-3xl mx-auto">
                  {categories.map((cat, i) => {
                    return cat.relatedWork.length > 0 && (
                      <li className="w-1/2 sm:w-1/3 md:w-1/5" id={i}>
                        <a className="block px-4 py-2 text-center uppercase cursor-pointer text-blue" data-target={cat.slug.current} onClick={scrollToTarget}>
                          {cat.title}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </Container>        
              
              {categories.map((cat, i) => {
                return cat.relatedWork.length > 0 && (
                  <Carousel
                    id={cat.slug.current}
                    title={cat.title}
                    items={cat.relatedWork}
                  />
                )
              })}
            </m.div>
          
        </m.div>
        
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