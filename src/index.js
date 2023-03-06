const express = require("express")
const app = express()
const v1 = require("./routes/v1/indexRoutes")


app.use(express.json())
app.use((req, res, next) => {
  let date = new Date().toLocaleTimeString();
  console.log(
    "\x1b[41m%s\x1b[0m",
    `[info] ${date} peticion: ${req.method} ${req.originalUrl}`
  );
  next();
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


app.use("/v1/api", v1.router)

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log(`[INFO] Servidor escuchando en ${PORT} `)
})