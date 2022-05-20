const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req:any, res: any) => {
    res.json({
        success: true
    })
})

app.listen(port, () => {
    console.log(`server is listening at localhost:${port}`)
})