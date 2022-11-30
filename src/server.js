const app = require("./app");

app.listen(5432)
const mainRoutes = require("./routes")


app.use(mainRoutes)
