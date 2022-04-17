import NextLink from 'next/link'
import { Box, Heading, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => {
  return (
    <Box>
      <Heading href="/works" as="h4" fontSize={20} display="inline-block">
        <Link href="/works">Works</Link>
      </Heading>
      <span>
        &nbsp;
        <ChevronRightIcon />
        &nbsp;
      </span>
      <Heading as="h3" display="inline-block" fontSize={20} mb={4}>
        {children}
      </Heading>
    </Box>
  )
}

export const WorkImage =({ src, alt }) => {
  return (
    <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
  )
}

export const Meta = ({ children }) => {
  return (
    <Badge colorScheme="green" mr={2}>
      {children}
    </Badge>
  )
}

