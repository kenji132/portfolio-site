import {Link, ListItem, Container, Badge, List} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="FedATM">
      <Container>
        <Title>
        FedATM: Adaptive Trimmed Mean based Federated Learning against Model Poisoning Attacks <Badge>2023</Badge>
        </Title>
        <P>
        卒論の延長で、従来のトリム平均法で考慮されていなかった条件を考慮した新しい連合学習手法であるFedATMを提案し、その有効性を実験により示しました。
        そして、
        <Link href="https://events.vtsociety.org/vtc2023-spring/">
        2023 IEEE 97th Vehicular Technology Conference (VTC2023-Spring) <ExternalLinkIcon mx="2px" />
        </Link>に論文が採択され、6月にイタリア・フィレンチェにて国際学会発表を行いました。
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Paper</Meta>
            <Link href="https://ieeexplore.ieee.org/document/10200010">
            FedATM: Adaptive Trimmed Mean based Federated Learning against Model Poisoning Attacks <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, Pytorch</span>
          </ListItem>
          <ListItem></ListItem>
        </List>
        <WorkImage src="/FedATM.png" alt="FedATM"/>
        <WorkImage src="/FedATM2.png" alt="FedATM"/>
      </Container>
    </Layout>
  )
}

export default Work