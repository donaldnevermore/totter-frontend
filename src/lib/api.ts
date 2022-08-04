/**
 * API should start with / and end with /
*/

export const api = {
    get: async (url: string, data: unknown = {}) => {
        return fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((res) => res.json())
    },
    post: async (url: string, data: unknown = {}) => {
        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((res) => res.json())
    }
}

export const toSearchParams = (data: any = {}) => {
    const s = new URLSearchParams()

    for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            const value: any = data[key]
            s.append(key, String(value))
        }
    }

    return s
}
