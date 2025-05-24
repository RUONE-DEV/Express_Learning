const app = require('./App');
const port = 5001
const server = app.listen(port ,()=>{
    console.log("Server is running port :"+port);
});