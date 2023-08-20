const server = require('./src/app')
const { sequelize } = require('./src/db')



const port = 3000;

sequelize.sync({ force: false }).then(
  server.listen(port, () => {
    console.log(`server listen on port is ${port}`);
  })
)




