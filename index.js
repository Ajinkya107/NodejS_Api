const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON request body
app.use(bodyParser.json());

// In-memory store for medical bills
const medicalBills = [];

// GET /items endpoint to get a list of medical bills
app.get('/items', (req, res) => {
  res.json(medicalBills);
});

// POST /items endpoint to create a new medical bill
app.post('/items', (req, res) => {
  const { patientName, patientAddress, hospitalName, dateOfService, billAmount } = req.body;

  // Validate request body
  if (!patientName || !patientAddress || !hospitalName || !dateOfService || !billAmount) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Create a new medical bill
  const medicalBill = {
    id: medicalBills.length + 1,
    patientName,
    patientAddress,
    hospitalName,
    dateOfService,
    billAmount,
  };

  // Add the new medical bill to the in-memory store
  medicalBills.push(medicalBill);

  // Return the new medical bill as response
  res.status(201).json(medicalBill);
});



// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
