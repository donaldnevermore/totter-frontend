export const fetchData = (url: string, data: any) => {
    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then((res) => res.json())
}

export const postData = async (url: string, data: any = {}) => {
    return fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json"
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        // body data type must match "Content-Type" header
        body: JSON.stringify(data)
    }).then((res) => res.json())
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
