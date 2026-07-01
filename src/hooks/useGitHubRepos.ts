import { useState, useEffect } from 'react'

const GITHUB_USERNAME = 'pengadaanbrs2'

export interface Repo {
  title: string
  desc: string
  tags: string[]
  demo: string
  code: string
  stars: number
  forks: number
}

interface GitHubApiRepo {
  name: string
  description: string | null
  language: string | null
  topics: string[]
  homepage: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
}

export function useGitHubRepos(): { repos: Repo[]; loading: boolean; error: string | null } {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`)
      .then(res => {
        if (!res.ok) throw new Error('Gagal mengambil repositori')
        return res.json() as Promise<GitHubApiRepo[]>
      })
      .then(data => {
        setRepos(
          data.map(r => ({
            title: r.name,
            desc: r.description || 'No description',
            tags: [r.language || 'N/A', ...r.topics].slice(0, 4),
            demo: r.homepage || '#',
            code: r.html_url,
            stars: r.stargazers_count,
            forks: r.forks_count,
          }))
        )
        setLoading(false)
      })
      .catch((err: Error) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return { repos, loading, error }
}
