const app = require("./server");
const { sequelize } = require("../db_conections");
const saveApiData = require("../controllers/saveApiData");

sequelize
  .sync({ force: true })
  .then(async () => {
    console.log("DB conectada");
    // console.log(await saveApiData());
    await saveApiData();
    app.listen(3001, () => {
      console.log("Server on port 3001");
    });
  })
  .catch((error) => {
    console.log(error);
  });
