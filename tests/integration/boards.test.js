const axios = require('axios')


describe('Tasks', () => {
    test('Can create a task', () => {
        return axios.post(`http://localhost:3001/boards/1/tasks`, {
            desc: "Test Task",
            UserId: 1
        }).then(res => {
            expect(res.status).toBe(200)
            return axios.get(`http://localhost:3001/boards/1`)
        }).then(res => {
            expect(res.status).toBe(200)
            expect(res.data).toEqual(expect.stringMatching(/Test Task/))
        })
    })
})

describe('Tasks', () => {
    test('Can retrieve existing tasks', () => {
        return axios.get(`http://localhost:3001/boards/1`
        ).then(res => {
            expect(res.status).toBe(200)
            expect(res.data).toBeTruthy()
        })
    })
})

describe('Tasks', () => {
    test('Can create user', () => {
        return axios.post(`http://localhost:3001/users`, {
            name: "Test user",
            avatar: "https://testavatar.com"
        }
        ).then(res => {
            expect(res.status).toBe(200)
            return axios.get('http://localhost:3001/')
        }).then(res => {
            expect(res.data).toEqual(expect.stringMatching(/Test user/))
            expect(res.data).toEqual(expect.stringMatching(/https:\/\/testavatar.com/))
        })
    })
})