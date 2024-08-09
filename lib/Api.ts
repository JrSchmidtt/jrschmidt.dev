import axios from 'axios'

const gitHubApiUrl = 'https://api.github.com'

export const getFromGithub = async (url: string, page: number, limit: number) => {
    try {
        const response = await axios.get(`${gitHubApiUrl}${url}`,{
            params: {
                sort: 'pushed',
                page: page,
                type: 'sources',
                per_page: limit
            }
        })
        response.data = response.data.filter((repo: any) => !repo.fork)
        return response.data
    }
    catch (error) {
        console.log(error)
    }
}