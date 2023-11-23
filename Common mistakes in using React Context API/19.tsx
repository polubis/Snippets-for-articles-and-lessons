import { useArticlesProvider } from '../../providers/articles'

const getMockedArticles = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{
                id: 'dasda',
                title: 'My new article'
            }, {
                id: 'dasdsad',
                title: 'My new article 2'
            }])
        }, 1500);
    })
}

export const useArticles = () => {
    const { set, reset, ...state } = useArticlesProvider();

    const load = async (): void => {
        set({ is: 'busy' })

        try {
            import("some-huge-library").then(({ someFunction }) => {
              const articles = await getMockedArticles()
              set({ is: 'ok', articles })
            })
        }
        catch(error: unknown) {
            set({ is: 'fail', error: 'Something went wrong' })
        }
    }
    
    return [state, { load }] as const
}
