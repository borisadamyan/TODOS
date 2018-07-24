const express =require('express');

const app = express();

app.get('/', (req, res) => {
    // res.send('<h1>Hello express!</h1>');
    res.send({
        name: 'Boris',
        likes: [
            'Football',
            'Code'
        ]
    });
});

app.get('/about', (req, res) => {
   res.send('About Page');
});

app.get('/bad', (req, res) => {
   res.send({
       errorMessage: 'You send a bad request'
   })
});
app.listen(3000);
// app.use();