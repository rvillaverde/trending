import fetch from 'node-fetch'

const baseUrl = 'https://api.github.com/search/repositories'
const baseQuery = 'q=%QUERY%+language:&sort=stars&order=desc'

export async function getRepositories() {
  let query = baseQuery.split('%QUERY%').join('')
  let res = await fetch(`${ baseUrl }?${ query }`)
  return await res.json()
}

export async function searchRepositories(q) {
  let query = baseQuery.split('%QUERY%').join(q)
  let res = await fetch(`${ baseUrl }?${ query }`)
  return await res.json()
}