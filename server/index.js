const express = require('express');
const app = express();
const path = require('path');
const { db } = require('./db');
const volleyball = require('volleyball');
const { Customer, Vendor } = require('./db')
const { v4: uuidv4 } = require('uuid');

app.use(express.json());
app.use(volleyball)
app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use('/assets', express.static(path.join(__dirname, '../assets')));

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, '../index.html')));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send({ message: err.message });
});


const port = process.env.PORT || 3000;

db.sync()
  .then(() => {
    app.listen(port, () => console.log(`listening on port ${port}`));
  });

//Routes for Customers
app.get('/api/customers', async (req, res, next) => {
  try {
    const customers = await Customer.findAll()
    // console.log(Customer)
    // console.log(customers)
    res.send(customers)
  } catch (err) {
    next(err)
  }
})

app.post('/api/customers', async (req, res, next) => {
  try {
    console.log('req recevied with body', req.body)
    const createdId = uuidv4();
    req.body.id = createdId
    const createdCustomer = await Customer.create(req.body);
    res.status(201).send(createdCustomer);
  }
  catch (ex) {
    next(ex);
  }
});

app.put('/api/customers/:id', async (req, res, next) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    const response = await customer.update(
      { VendorId: req.body.VendorId }
    );
    res.send(customer);
  }
  catch (ex) {
    next(ex);
  };
});

app.delete('/api/customers/:id', async (req, res) => {
  try {
    console.log('params', req.params)
    Customer.destroy({ where: { id: req.params.id } })
    res.status(204).send({
      message: 'customer deleted'
    })
  }
  catch (ex) {
    next(ex)
  };
});


app.get('/api/vendors', async (req, res, next) => {
  try {
    console.log("getVendors called")
    const vendors = await Vendor.findAll();
    // console.log('logging vendors ',vendors)
    res.send(vendors)
  } catch (err) {
    next(err)
  }
})

app.post('/api/vendors', async (req, res, next) => {
  try {
    const createdId = uuidv4();
    req.body.id = createdId
    const createdVendor = await Vendor.create(req.body)
    res.status(201).send(createdVendor)
  } catch (err) {
    next(err)
  }
})