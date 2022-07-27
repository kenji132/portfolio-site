import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {GridItem} from '../components/grid-item'
import thumbQiita1 from '../public/Qiita1.png'



const Posts = () => {
  return (
    <Layout title="Posts">
      <Container >
        <Heading as="h4" fontSize={20} mb={4}>
          Popular Posts
        </Heading>
        <Section delay={0.1}>
          <SimpleGrid columns={[1,2,2]} gap={6}>
            <GridItem 
              title="Rails Serverについて"
              thumbnail={thumbQiita1}
              href="https://qiita.com/devkenji/items/2ef21d9ab75fc9a437e2"
            />
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Posts