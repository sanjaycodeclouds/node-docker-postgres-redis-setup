const express = require("express")

const app = express()
const PORT = 5001

app.get("/", (req, res) => {
    return res.send("I am in the container")
})

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))