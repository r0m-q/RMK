const Sequelize = require("sequelize");
const sequelize = new Sequelize("rmkdb", "root", "RMK_passw0rd1", {
  dialect: "mysql",
  host: "localhost",
  define: {
    timestamps: false
  }
});
const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});
sequelize.sync().then(result=>console.log(result))
.catch(err=> console.log(err));