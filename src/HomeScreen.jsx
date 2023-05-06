import React from "react";

const HomeScreen = () => {
  function payWithBudPay(e) {
    e.preventDefault();
    BudPayCheckout({
      key: "pk_live_0syy9e7bnjeduyf1wzct57rzyndbphtduo6bop", // Replace with your public key
      email: "michaelmunavu83@gmail.com",
      amount: "1",
      first_name: "Michael",
      last_name: "Munavu",
      currency: "KES", // Use GHS for Ghana Cedis or USD for US Dollars
      reference:
        "" +
        Math.floor(Math.random() * 100000000000 + 1) +
        new Date().getSeconds() +
        new Date().getMilliseconds(), // generates a pseudo-unique reference. Please replace with a reference you generated. or remove the line entirely so our API will generate one for you
      callback: function (response) {
        //this happens after the payment is completed successfully
        var reference = response.reference;
        alert(
          "Payment complete! Reference: " +
            reference +
            ", Status: " +
            response.status
        );
      },
      onClose: function (response) {
        console.log(response);
        alert("Transaction was not completed, window closed.");
      },
    });
  }
  return (
    <div>
      
      <button
        className="bg-red-500 p-4"
        onClick={(e) => {
          payWithBudPay(e);
        }}
      >
        Pay now
      </button>
    </div>
  );
};

export default HomeScreen;
