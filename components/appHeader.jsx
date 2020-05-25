import styled from 'styled-components'

const Header = styled.div`
  align-items: center;
  background-color: #333;
  color: white;
  display: flex;
  height: 60px;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 8;
`

export default function AppHeader() {
  return (
    <Header>
      GitHub Tending Repositories
    </Header>
  )
}
