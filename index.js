const express = require('express');
require("./db/conn");

// Initialize Express app
const app = express();
const PORT = 3000;

const router=require("./router/user");


// Middleware
app.use(express.json());
app.use(router);

//  server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
