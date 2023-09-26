const express = require('express');
const stripe = require('stripe')('sk_test_51NuUCfIFautlSwyJXl8YYQX3AfSNsqLv3E15LM3Jfh3IKobMTEgLF9RzAsitRUjV5uqUVTg4H0RrBI1LjMUSLN4N00qFNlx4H8');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors'); 
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000', 
}));
app.get('/', (req, res) => {
  res.send('server lanched');
});
app.post('/create-payment-intent', async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: 'aud',
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(1088, () => {
  console.log('Server is running on port 1088');
});