const express = require('express');
const stripe = require('stripe')('sk_test_your_stripe_secret_key');

const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.post('/process-payment', async (req, res) => {
  const { amount, currency, token } = req.body;

  try {
    // Create a payment intent using the Stripe API
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method: token,
      confirm: true,
    });

    // Return the payment intent status to the client
    res.json({ status: paymentIntent.status });

  } catch (error) {
    res.status(500).json({ error: 'An error occurred while processing the payment.' });
  }
});

app.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.listen(8080, () => {
    console.log("Server successfully running on port 8080");
  });