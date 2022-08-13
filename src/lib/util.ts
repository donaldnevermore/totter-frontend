export function getLocal<T>(url: string): T | null {
    const data = localStorage.getItem(url)
    if (data === null) {
        return data
    }

    return JSON.parse(data)
}

export function setLocal<T>(url: string, data: T) {
    localStorage.setItem(url, JSON.stringify(data))
}

export function replaceItemAtIndex<T>(arr: T[], index: number, newValue: T) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)]
}

export function removeItemAtIndex<T>(arr: T[], index: number) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)]
}
