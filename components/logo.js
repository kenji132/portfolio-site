import Link from 'next/link'
import Image from 'next/image'
import {Text, useColorModeValue} from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px
  padding: 10px;

  &:hover img {
    transfrom: rotate(20deg);
  }
`

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src="/wolf.png" width={20} height={20} alt="wolf" />
          <Text 
            color={useColorModeValue('gray800', 'whiteAlpha.900')}
            fontWeight='bold'
            fontFamily='M PLUS Rounded 1c'
            ml={3}>
              Kenji Nishimoto
          </Text>
        </LogoBox>
      </a>

    </Link>
  )
}

export default Logo