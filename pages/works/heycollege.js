import {Link, ListItem, Container, Badge, List} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="heycollege">
      <Container>
        <Title>
          Hey College <Badge>2021</Badge>
        </Title>
        <P>
        It is an application that allows you to post and browse review information of university lectures.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://heycollege.herokuapp.com/">
            https://heycollege.herokuapp.com/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Ruby on Rails, AWS S3, Redis, Heroku</span>
          </ListItem>
          <ListItem></ListItem>
        </List>
        <WorkImage src="/Heycollege.png" alt="Heycollege"/>
        <WorkImage src="/Heycollege2.png" alt="Heycollege"/>
      </Container>
    </Layout>
  )
}

export default Work