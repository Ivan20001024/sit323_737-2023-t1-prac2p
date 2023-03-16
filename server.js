const port = 3000;
const express = require('express');
const app = express();

app.use(express.static('index'));
app.use(express.urlencoded({extended: true}));
app.post('/TitlePrinted', (req, res) => {
    const text = req.body.input;
    res.send(`
        <html>
        <head>
        <style>
        .a1{position:absolute; font-size:30; font-weight:bold;}
        </style>
        </head>
        <body>
        <div class="a1">Successfully type the title: ${text}</div>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Successful running on ${port}`);
});

