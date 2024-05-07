const stripeKey = "YOUR_TOKEN";
const domain = "http://localhost:3001/";
const stripe = require("stripe")(stripeKey);

const getSessionData = async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.price * 100,
      currency: "usd",
      description: req.body.description,
      shipping: {
        name: "Jenny Rosen",
        address: {
          line1: "510 Townsend St",
          postal_code: "98140",
          city: "San Francisco",
          state: "CA",
          country: "US",
        },
      },
      metadata: {
        currency: "usd",
        id: "Asasas",
      },
      receipt_email: req.body.email,
      payment_method_types: ["card"],
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getSessionData,
};
