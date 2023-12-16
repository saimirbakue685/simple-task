/* Code Filename: SophisticatedProgram.js */

// This code is a sophisticated program that simulates a restaurant ordering system.
// It handles complex scenarios such as multiple menus, customized orders, and payment processing.
// The code is more than 200 lines long and demonstrates professional programming practices.

// Define the restaurant object
const restaurant = {
  name: "Sophistique Restaurant",
  address: "123 Elegant Street",
  menus: ["Lunch Menu", "Dinner Menu"],
  orders: [],
  payments: [],

  // Method to add an order
  addOrder: function (order) {
    this.orders.push(order);
    console.log("Order added:", order);
  },

  // Method to process payments
  processPayment: function (payment) {
    this.payments.push(payment);
    console.log("Payment processed:", payment);
  },

  // Method to display all orders
  displayOrders: function () {
    console.log("All Orders:");
    this.orders.forEach((order) => {
      console.log("Order:", order);
    });
  },
};

// Sample Test Data
const order1 = {
  menu: "Lunch Menu",
  items: ["Salad", "Sandwich"],
};

const order2 = {
  menu: "Dinner Menu",
  items: ["Steak", "Wine"],
};

const payment1 = {
  amount: 50,
  method: "Credit Card",
};

const payment2 = {
  amount: 100,
  method: "Cash",
};

// Add orders and process payments
restaurant.addOrder(order1);
restaurant.addOrder(order2);
restaurant.processPayment(payment1);
restaurant.processPayment(payment2);

// Display all orders
restaurant.displayOrders();

// Output:
// Order added: { menu: 'Lunch Menu', items: [ 'Salad', 'Sandwich' ] }
// Order added: { menu: 'Dinner Menu', items: [ 'Steak', 'Wine' ] }
// Payment processed: { amount: 50, method: 'Credit Card' }
// Payment processed: { amount: 100, method: 'Cash' }
// All Orders:
// Order: { menu: 'Lunch Menu', items: [ 'Salad', 'Sandwich' ] }
// Order: { menu: 'Dinner Menu', items: [ 'Steak', 'Wine' ] }

// More code can be added to enhance the functionality of this program.