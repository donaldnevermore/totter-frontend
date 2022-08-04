export const getLocal = (url: string) => {
    const data = localStorage.getItem(url)
    if (data === null) {
        return data
    }

    return JSON.parse(data)
}

export const setLocal = (url: string, data: unknown) => {
    localStorage.setItem(url, JSON.stringify(data))
}
