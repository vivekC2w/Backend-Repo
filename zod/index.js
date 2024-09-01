const zod = require('zod');

function validateInput(obj) {
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })

    const response = schema.safeParse(obj);
    console.log(response);
    return response;
}

validateInput({
    email: "a@a.com",
    password: "12345678"
});

app.post("/login", function(req, res) {
    const response = validateInput(req.body);
    if(!response.success) {
        res.status(411).json({
            msg: "input is invalid",
        })
        return;
    } else {
        res.send({response});
    }
})