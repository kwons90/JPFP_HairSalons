const Sequelize = require('sequelize');
const chalk = require('chalk')
const { UUID, UUIDV4, STRING, INTEGER } = Sequelize;
const DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/MyStyles';
// Figure out why this don't work
// const Customers = require('./models/Customers')
const HairSalons = require('./models/Vendors')

const sync = async () => {
};

const db = new Sequelize(DATABASE_URL, {
  logging: false,
});

const Customer = db.define('Customer', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
      }, 
    phoneNumber: {
        type: STRING,
        // allowNull: false,
        unique: true,
        // validate: {
        //     isValidPhoneNo: function (value) {
        //         if (!value) return value;

        //         var regexp = /^[0-9]+$/;
        //         var values = (Array.isArray(value)) ? value : [value];

        //         values.forEach(function (val) {
        //             if (!regexp.test(val)) {
        //                 throw new Error("Number only is allowed.");
        //             }
        //         });
        //         return value;
        //     },
        // }
    },
    firstName: {
        type: STRING,
        allowNull: false,
    },
    lastName: {
        type: STRING,
        allowNull: false,
    },
    email: {
        type: STRING,
        allowNull: false,
    },
    monthlySpend: {
        type: INTEGER,
        allowNull: false,
    },
})

const Vendor = db.define('Vendor', {
  id: {
      type: UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
  },
  vendorName: {
      type: STRING,
      allowNull: true,
  },
  city: {
      type: STRING,
      allowNull: true,
  },
  imageURL: {
    type:STRING,
    allowNull:false,
  }
})

const seed = async (force = false) => {
  try {
    await db.sync({ force });
    console.log(chalk.green(`DB successfully connected, and synced. Force: ${force}`));
  } catch (e) {
    console.log(chalk.red('Error while connecting to database'));
    throw e;
  }
}

seed()

Customer.belongsTo(Vendor, {foreignKey: 'VendorId'})
Vendor.hasMany(Customer,{ foreignKey: 'VendorId'})

module.exports = {
  sync,
  db,
  seed,
  Customer,
  Vendor
};
