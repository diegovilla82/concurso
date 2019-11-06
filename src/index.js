const express = require('express');

const app = express();

app.set('PORT', 3000);


app.listen(app.get('PORT'), (req, res) => {
    console.log('Server on port '+ app.get('PORT'));
});