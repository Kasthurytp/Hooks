const functions = require("firebase-functions");
const express = require("express");
const cors = require ("cors");
const stripe = require("stripe")("sk_test_51L1OiCJeyByGMDpay4VXBIrR8awWuIPZta11QscSCdq1QXBRNRDLoOTVzqkJpnbf7D14O7WeRzQqGfj5GuWXCsMw00zJqxgxS1");

//API

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true}));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send
('Hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment Request Recieved for this amount >>>', total)

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // Specify amount here
        currency: "usd" // Specify currency here
    });

    //OK - Created
    // Return client secret
    response.send({
        clientSecret: paymentIntent.client_secret
    });
})

//Listen command
exports.api = functions.https.onRequest(app)

//Example endpoint







