const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Allows express to use static files like HTML

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/grade', (req, res) =>{
    res.send('Got a GET request at /grade');
});
app.post('/grade', (req, res) =>{
    res.send('Got a POST request at /grade');
});
app.put('/grade', (req, res) =>{
    res.send('Got a PUT request at /grade');
});
app.delete('/grade', (req, res) => {
    res.send('Got a DELETE request at /grade');
});
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));