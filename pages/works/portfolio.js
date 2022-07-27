import {Link, ListItem, Container, Badge, List} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="portfolio">
      <Container>
        <Title>
          Portfolio <Badge>2022</Badge>
        </Title>
        <P>
        私のポートフォリオサイトです
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://kenji-nishimoto-portfolio-naztvr2e2-kenji132.vercel.app/">
            https://kenji-nishimoto-portfolio-naztvr2e2-kenji132.vercel.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Next.js, Chakura UI</span>
          </ListItem>
          <ListItem></ListItem>
        </List>
        <WorkImage src="/portfolio-thumb.png" alt="portfoplio"/>
      </Container>
    </Layout>
  )
}

export default Work