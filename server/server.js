const path = require('path');
const publicPath = path.join(__dirname, '../public');

console.log(publicPath);

const express = require ('express')
const port = process.env.PORT || 5000;
var app = express();

app.use(express.static(publicPath));

app.listen(5000, () => {
  console.log(`Server is up on port ${port}`)
})
