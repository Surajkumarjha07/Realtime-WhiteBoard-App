const express = require('express');
const ConnectDatabase = require('./database');
const cors = require("cors");
const SignUp = require('./routes/SignUp');
const login = require("./routes/login");
const updateUser = require('./routes/update');
const deleteUser = require('./routes/delete');
const getUser = require("./routes/getUser")
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

corsOptions = {
    methods: "*",
    origin: "http://localhost:3000",
    allowCredentias: true,
    allowOrigin: true
}
app.use(cors(corsOptions))

ConnectDatabase()

app.get("/", (req,res) => {
    res.send("Hello Mr. Wayne");
})

app.use("/signUp", SignUp)
app.use("/login", login)
app.use('/updateUser', updateUser)
app.use("/deleteUser", deleteUser)
app.use("/getUser", getUser)

app.listen(4000,() => {
    console.log("Server is running");    
})