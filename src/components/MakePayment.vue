<template>
  <img alt="Vue logo" :src="product.image">
  <div class="product">
    <h2 class="product_name">{{ product.name }}</h2>
    <p class="product_description">{{ product.description }}</p>
    <p class="product_price">Price: {{ product.price }} USD</p>

    <form id="pay">
      <input type="hidden" name="product_price" id="product_price" :value="product.price">
      <label>Card Number:</label>
      <div id="card-number" class="form-field"></div>
      <div class="custom-inputs">
        <label>Card Month:</label>
        <input class="custom-input" id="card-month" type="text" autocomplete="off" size="4" maxlength="2">
      </div>
      <div class="custom-inputs">
        <label>Card Year:</label>
        <input class="custom-input" id="card-year" type="text" autocomplete="off" size="4" maxlength="4">
      </div>
      <label>CVV:</label>
      <div id="card-cvv" class="form-field"></div>
      <!-- comment out or remove the below section if you do not want the customer to enter their billing street and zip for AVS -->
      <label>Street:</label>
      <div id="address" class="form-field"></div>
      <label>Zip:</label>
      <div id="zipFirst5" class="form-field"></div>
      <label>Zip+4:</label>
      <div id="zipPlus4" class="form-field"></div>
      <input type="hidden" id="avs-fields-data" />
      <!-- end of AVS section -->
      <input type="hidden" id="card-token" />
    </form>
    <button class="product__button" name="tokenize_and_pay" value="Pay Now" @click="handlePayment">Pay Now</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      product: {
        id: 0,
        name: '',
        description: '',
        price: 0,
        image: ''
      }
    }
  },
  methods: {
    async handlePayment() {
      // The handlePayment function is triggered when the payment form is submitted and then the getToken() function is then called in the ph.js script to tokenize the card.
      const ph = await require('../../public/js/ph.js');
      ph.getToken();
    }
  },
  mounted() {
    const productData = localStorage.getItem("productData");
    if (productData) {
      this.product = JSON.parse(productData)
    }
    const ph = require('../../public/js/ph.js');
    ph.initialize_sdk('Your MID','Your_Gateway_Public_Key');
  },
}
</script>

<style scoped>
.product {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px auto;
  max-width: 300px;
}

.product_name {
  font-size: 24px;
  margin-bottom: 10px;
}

.product_description {
  font-size: 16px;
  margin-bottom: 10px;
}

.product_price {
  font-size: 18px;
  margin-bottom: 10px;
}

.product_button {
  background-color: #4caf50;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.product_button:hover {
  background-color: #3e8e41;
}

.form-field{
  max-height: 70px;
}

.custom-input{
  border: 1px solid black;
  width: 90%;
  height: 20px;
  background: transparent;
  border-radius: 3px;
  padding: 0.65em 0.5em;
  font-size: 91%;
}

.custom-inputs{
  max-height: 100px;
  height: 90px;
}
</style>