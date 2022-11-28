const dotenv = require('dotenv');
const app = require('./app');
const port = process.env.PORT || 8080;

//setting up config file
dotenv.config({ path: 'config/config.env' });

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(
    `Server is running at port ${port} in ${process.env.NODE_ENV} mode`
  );
});
