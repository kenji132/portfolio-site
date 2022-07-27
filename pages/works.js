import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbHeycollege from '../public/Heycollege2.png'
import Layout from '../components/layouts/article'
import thumbPortfolio from '../public/portfolio-thumb.png'

const Works = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4} >
          Works
        </Heading>
        <SimpleGrid columns={[1,1,2]} gap={6}>
          <Section>
            <WorkGridItem
              id="heycollege"
              title="Heycollege"
              thumbnail={thumbHeycollege}
            >
              College classes information web app
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="portfolio"
              title="Portfolio"
              thumbnail={thumbPortfolio}
            >
              College classes information web app
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works