const port = process.env.PORT || 3000;

const app = require("express")();

app.get('/', (req, res) => {
    res.send('Demo OAuth');
});

app.listen(port, () => {
    console.log(`app listening on PORT: ${port}`);
});