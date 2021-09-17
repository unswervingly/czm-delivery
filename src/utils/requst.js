import axios from "axios";

export const czm_post = (url, data = {}) => {
    return new Promise((resolve, reject) => {
        axios.post(url, data, {
            baseURL: "https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd",
            Headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            resolve(res.data)
        }, err => {
            reject(err)
        })
    })
}