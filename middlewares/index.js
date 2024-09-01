const express = require('express');
const z = require('zod');

const app = express();

const schema = z.array(z.number());
//to use body parser
app.use(express.json());

function userMiddleware(req, res, next) {
    if (username != 'admin' && password != 'admin') {
        res.status(403).json({
            msg: "Invalid User",
        });
    } else {
        next();
    }
}

function kidneyMiddleware(req, res, next) {
    if (kiedneyId != 1 || kiedneyId != 2) {
        res.status(400).json({
            msg: "Something is wrong with your credentials"
        })
        return;
    }
    next();
}

app.post('/kidney-checkup', userMiddleware, kidneyMiddleware, (req, res) => {
    //kidney = [1, 2]
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if(!response.success) {
        res.status(411).json({
            msg: "input is invalid",
        })
    } else {
        res.send({response});
    }
});

app.get('/heart-checkup', userMiddleware, kidneyMiddleware, (req, res) => {
    res.send("Your heart is fine!")
});

//global catches
app.use((err, req, res, next) => {
    res.json({
        msg: "Sorry something is up with our server",
    })
});

app.listen(3000);