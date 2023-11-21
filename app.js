const express = require('express');
const app = express();
const basicAuth = require('express-basic-auth');

app.use(basicAuth({
    users: { 'Ahtsham': '0330499333' },
    challenge: true,
    unauthorizedResponse: 'Unauthorized access',
}));
app.get('/protected', (req, res) => {
    res.send('Authenticated!');
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
