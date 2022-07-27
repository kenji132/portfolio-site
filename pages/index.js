import NextLink from 'next/link'
import {Container, Box, Heading, Image, useColorModeValue, Link, Button} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import {ChevronRightIcon} from '@chakra-ui/icons'
import {BioSection, BioYear} from '../components/bio'
import Layout from '../components/layouts/article'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord,
} from 'react-icons/io5' 
import {List, ListItem, Icon} from '@chakra-ui/react'



const Page = () => {
  return (
    <Layout>
      <Container>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} aligns="center">
          Hello, I am a college student in Osaka Metropolitan University in Japan.
        </Box>
        <Box display={{md: 'flex'}}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Kenji Nishimoto
            </Heading>
            <p>Software Engineer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image 
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/profile.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Works
          </Heading>
          <Paragraph>
            ソフトウェアエンジニア志望の大阪府立大学工学域４年生です。
            rails/python/Next.jsを用いたアプリケーションの開発が好きです。現在はプログラミングスクールにてメンター業務をインターン生として行ないながら、大学院試験に向けての勉強と機械学習の研究へ向けた基礎勉強を行っています。
            {/* <NextLink href="/works/test">
              <Link>Test</Link>
            </NextLink>. */}
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2001</BioYear>
            京都出身
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            大阪府立大工学域電気電子系学類に入学
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            DMM webcampのメンターを始める
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            大阪府立大学工学域知的情報通信研究グループに所属
          </BioSection>
        </Section>
        <Section>
          <Heading as="h3" variant="section-title">
            Hobby
          </Heading>
          <Paragraph>
            Music, Anime, Baseball (MLB,NPB)
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the Web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/kenji132" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}>
                  @Kenji132
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/bick206" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}>
                  @bick206
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout> 
  )
}

export default Page