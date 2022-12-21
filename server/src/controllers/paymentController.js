const stripe = require("stripe")("sk_test_51MCNmyE4XPO5iY4DMFPgucqgKztYCOF6aizWjXyv4qvH3BdXPAa7CVrugJeySrklu0GCUzh7e2SD1b6SkCxepMMu00W1TnFULM");
const createPayment = async (req, res) => {
    try {
        const total = req.body.amount;
        console.log("Payment Request recieved for this rupees", total);
  
        const payment = await stripe.paymentIntents.create({
        amount: total * 234,        
        currency: "pkr",


    });

    // res.status(200).send({
       
    //     response: "response successful",
    // });

    res.status(201).send({
       
        clientSecret: payment.client_secret,
    });
        
        
    } 
    catch (error) {
        res.status(404).json({ message: error.message });
        
    }
    
};

module.exports = { createPayment };