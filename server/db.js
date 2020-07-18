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
const customers = [
  {
    id: 'c7536c51-b786-49ab-83c4-428bf0508b04',
    phoneNumber: '33123141',
    firstName: 'Thompson',
    lastName: 'Harris',
    email: 'thompsonharris@gmail.com',
    monthlySpend: 800,
    createdAt: '2020-07-16T13:25:20.511Z',
    updatedAt: '2020-07-17T08:08:25.584Z',
    VendorId: '7aaf2774-f427-4a0b-b9ef-eb6ee562cf6d'
  },
  {
    id: '54877462-b44c-4bec-b99f-c55825530d6e',
    phoneNumber: '9177150899',
    firstName: 'Sunho',
    lastName: 'Lee',
    email: 'sunho@gmail.com',
    monthlySpend: 500,
    createdAt: '2020-07-18T07:37:36.078Z',
    updatedAt: '2020-07-18T07:37:39.757Z',
    VendorId: '88eee344-0f31-45f6-8c6f-faf8e296a249'
  },
  {
    id: 'b169c1f1-4b3f-4dd7-b323-14cf6057f6bb',
    phoneNumber: '1239201931',
    firstName: 'Jason',
    lastName: 'Cho',
    email: 'jasn.cho@macquarie.com',
    monthlySpend: 341,
    createdAt: '2020-07-16T02:37:11.875Z',
    updatedAt: '2020-07-18T07:37:45.070Z',
    VendorId: '88eee344-0f31-45f6-8c6f-faf8e296a249'
  },
  {
    id: 'addb353d-6e9c-4f01-9034-bb69fc02d8be',
    phoneNumber: '9177560899',
    firstName: 'Sang-Hyuk',
    lastName: 'Kwon',
    email: 'sanghyukkwon90@gmail.com',
    monthlySpend: 2000,
    createdAt: '2020-07-16T22:36:17.552Z',
    updatedAt: '2020-07-18T07:37:53.852Z',
    VendorId: '88eee344-0f31-45f6-8c6f-faf8e296a249'
  },
  {
    id: '15dd7662-6daf-400f-9f24-2e3958569474',
    phoneNumber: '2321',
    firstName: 'Customer',
    lastName: 'Name',
    email: 'few',
    monthlySpend: 212,
    createdAt: '2020-07-16T02:43:49.002Z',
    updatedAt: '2020-07-16T23:46:05.652Z',
    VendorId: '7aaf2774-f427-4a0b-b9ef-eb6ee562cf6d'
  },
  {
    id: '08fd9627-1f11-4958-bd1e-2a1a3f277712',
    phoneNumber: '8172102321',
    firstName: 'Hello',
    lastName: 'Goodbye',
    email: 'hello@gmail.com',
    monthlySpend: 345,
    createdAt: '2020-07-16T02:40:42.996Z',
    updatedAt: '2020-07-17T03:08:10.818Z',
    VendorId: '88eee344-0f31-45f6-8c6f-faf8e296a249'
  },
  {
    id: 'e4a4d59f-2df8-4be2-ab2d-0f49262c1aca',
    phoneNumber: '12381901',
    firstName: 'feq',
    lastName: 'wer',
    email: 'from@gmai.com',
    monthlySpend: 241,
    createdAt: '2020-07-17T03:18:27.070Z',
    updatedAt: '2020-07-17T03:18:35.173Z',
    VendorId: 'fef3cca1-4f76-4319-b525-e24672cc9982'
  },
  {
    id: '02cd5ebe-03ca-4a30-b75b-8e3f4a290498',
    phoneNumber: '31242412',
    firstName: 'Varit',
    lastName: 'Fridn',
    email: 'sf@gmail.com',
    monthlySpend: 321,
    createdAt: '2020-07-17T02:57:05.676Z',
    updatedAt: '2020-07-17T07:24:43.883Z',
    VendorId: 'aed578da-140e-4f90-9e93-ffd4c170c4e0'
  }
]

for(let i = 0;i<customers.length;i++) {
  Customer.create(customers[i])
}
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

const vendors = [
  {
    id: 'aed578da-140e-4f90-9e93-ffd4c170c4e0',
    vendorName: 'Maison de Mi',
    city: 'New York',
    imageURL: 'https://image.shutterstock.com/image-photo/interior-modern-hair-salon-600w-144022057.jpg',
    createdAt: '2020-07-15T08:54:03.616Z',
    updatedAt: '2020-07-15T08:54:03.616Z'
  },
  {
    id: 'fef3cca1-4f76-4319-b525-e24672cc9982',
    vendorName: 'Hair Styles for Cool People',
    city: 'New York',
    imageURL: 'https://image.shutterstock.com/image-photo/interior-modern-hair-salon-600w-144022057.jpg',
    createdAt: '2020-07-15T23:53:28.277Z',
    updatedAt: '2020-07-15T23:53:28.277Z'
  },
  {
    id: '88eee344-0f31-45f6-8c6f-faf8e296a249',
    vendorName: 'HairOsh',
    city: 'New York',
    imageURL: 'https://image.shutterstock.com/image-photo/picture-working-day-inside-beauty-600w-313680314.jpg',
    createdAt: '2020-07-16T00:30:56.705Z',
    updatedAt: '2020-07-16T00:30:56.705Z'
  },
  {
    id: '7aaf2774-f427-4a0b-b9ef-eb6ee562cf6d',
    vendorName: 'Barber Room 306',
    city: 'Brooklyn',
    imageURL: 'https://image.shutterstock.com/z/stock-photo-beauty-and-people-concept-happy-young-woman-with-hairdresser-washing-head-at-hair-salon-570908683.jpg',
    createdAt: '2020-07-16T22:54:31.448Z',
    updatedAt: '2020-07-16T22:54:31.448Z'
  }
]
for(let i =0; i<vendors.length;i++) {
  Vendor.create(vendors[i])
}
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
