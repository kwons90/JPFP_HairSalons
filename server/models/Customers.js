// const {db} = require('../db');
// const Sequelize = require('sequelize');
// const { UUID, UUIDV4, STRING, NUMBER } = Sequelize;

// const Customers = db.define('Customers', {
//     id: {
//         type: UUID,
//         defaultValue: UUIDV4,
//         primaryKey: true,
//       }, 
//     phoneNumber: {
//         type: Sequelize.ARRAY(STRING),
//         allowNull: false,
//         unique: true,
//         validate: {
//             isValidPhoneNo: function (value) {
//                 if (!value) return value;

//                 var regexp = /^[0-9]+$/;
//                 var values = (Array.isArray(value)) ? value : [value];

//                 values.forEach(function (val) {
//                     if (!regexp.test(val)) {
//                         throw new Error("Number only is allowed.");
//                     }
//                 });
//                 return value;
//             },
//         }
//     },
//     firstName: {
//         type: STRING,
//         allowNull: false,
//     },
//     lastName: {
//         type: STRING,
//         allowNull: false,
//     },
//     email: {
//         type: STRING,
//         allowNull: false,
//     },
//     monthlySpend: {
//         type: NUMBER,
//         allowNull: false,
//     },
// })

// module.exports = Customers