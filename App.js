const cart = ['Sneakers', 'shirts','jeans'];

createOrder(cart, function(orderId) {
    processedToPayment(orderId,function (paymentInfo) {
        showOrderSummery(paymentInfo,function () {
            updateWalletBalance();
        });
    });
}); // Call Back Hell


createOrder(cart)
.then((orderId) => processedToPayment(orderId))
.then((paymentInfo) => showOrderSummery(paymentInfo))
.then((paymentInfo) => updateWalletBalance()); // Call Back using promises

// promise.then(function(orderId) {
//     processedToPayment(orderId);
// });
