const express = require('express')
const next = require('next')

const env = process.env.NODE_ENV !== "production"
const app = next({ env })

const handle = app.getRequestHandler()

app.prepare()
.then(()=> {

    const server = express()

    server.get('/users/profile/:id', (req,res) => {
        const actualPage = '/users/profile'
        const queryParams = { userId: req.params.id}
        app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(3000, (err)=> {
        if (err) throw err
        console.log(' - started server on http://localhost:3000')
    })

})
.catch ((ex)=> {
    console.error(ex.stack)
    process.exit(1)
})