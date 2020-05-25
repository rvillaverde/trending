import styled from 'styled-components'

const Footer = styled.div`
  align-items: center;
  bottom: 0;
  color: #333;
  background-color: #ccc;
  display: flex;
  height: 120px;
  justify-content: center;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: 0;
`

export default function AppFooter() {
  return (
    <Footer>
      App footer
    </Footer>
  )
}
