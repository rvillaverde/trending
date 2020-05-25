import Head from 'next/head'
import styled from 'styled-components'

import AppHeader from './appHeader'
import AppFooter from './appFooter'

const title = 'GitHub trending repositories.'
const description = 'Demo for GitHub trending repositories.'

const MainContainer = styled.div`
  @media (max-width: 460px) {
    padding: 0 12px;
  }
`
export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>{ title }</title>
        <meta
          name={ title }
          content={ description }
        />
        <meta name="og:title" content={ title } />
        <meta name="og:description" content={ description } />
      </Head>
      <AppHeader></AppHeader>
      <MainContainer>
         { children }
      </MainContainer>
      <AppFooter></AppFooter>
      <style jsx global>{`
        body {
          font-family: sans-serif;
          margin: 0;
          min-height: 100vh;
          padding-top: 60px;
          padding-bottom: 120px;
          position: relative;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
