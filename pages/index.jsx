import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SearchFrom from '../components/searchForm'
import { getRepositories, searchRepositories } from '../utils/repositories'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, repositories: props.repositories.items }
    this.handleSearch = this.handleSearch.bind(this)
  }

  static async getInitialProps() {
    let repositories = await getRepositories()
    return { repositories: repositories }
  }

  async handleSearch(e) {
    e.preventDefault()
    this.setState({ loading: true })
    let formData = new FormData(e.target)
    let query = formData.get('query')
    let repositories = await searchRepositories(query)
    this.setState({ loading: false, repositories: repositories.items })
  }

  render() {
    return (
      <Layout>
        <RepositoryList>
          <SearchFrom onSubmit={ this.handleSearch }></SearchFrom>
          { this.state.loading &&
            <InfoLegend>Loading repositories...</InfoLegend>
          }
          { !this.state.loading && (!this.state.repositories || this.state.repositories.length === 0) &&
            <InfoLegend>No repositories found.</InfoLegend>
          }
          { !this.state.loading && 
            this.state.repositories.map(repository => (
              <RepositoryItem key={ repository.id }>
                <RepositoryName>
                  { repository.name }
                </RepositoryName>
                <RepositoryDescription>
                  { repository.description }
                </RepositoryDescription>
              </RepositoryItem>
            ))
          }
        </RepositoryList>
      </Layout>
    )
  }
}

const RepositoryList = styled.ul`
  border: 1px solid #ccc;
  list-style: none;
  max-width: 1024px;
  margin: 48px auto;
  padding: 0;

  @media (max-width: 460px) {
    margin: 12px auto;
  }
`
const RepositoryItem = styled.li`
  color: #333;
  font-family: sans-serif;
  padding: 12px;
  
  &:not(:first-child) {
    border-top: 1px solid #ccc;
  }
`
const RepositoryName = styled.h2`
  font-size: 24px;
  margin: 8px 0;
`
const RepositoryDescription = styled.p`
  font-size: 14px;
  margin: 8px 0;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
`
const InfoLegend = styled.div`
  color: #333;
  display: flex;
  justify-content: center;
  padding: 24px;
`

export default Home
