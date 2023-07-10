<template>
    <h1>Products List</h1>
    <div class="product-list">
        <div v-for="product in products" :key="product.id" class="product-card">
           <RouterLink to="/make-payment">
                <img :src="product.image" alt="Product Image" class="product-image" />
                <h3 class="product-title">{{ product.name }}</h3>
                <p class="product-price">{{ product.price }}</p>
            </RouterLink>
        </div>
    </div>
</template>

<script>

export default {
  data() {
    return {
       products: [
        {
          id: 1,
          name: "Product 1",
          image: "img/logo.82b9c7a5.png",
          price: "$10.99",
        },
        {
          id: 2,
          name: "Product 2",
          image: "img/logo.82b9c7a5.png",
          price: "$19.99",
        },
        {
          id: 3,
          name: "Product 3",
          image: "img/logo.82b9c7a5.png",
          price: "$13.99",
        },
        {
          id: 4,
          name: "Product 4",
          image: "img/logo.82b9c7a5.png",
          price: "$14.99",
        },
        {
          id: 5,
          name: "Product 5",
          image: "img/logo.82b9c7a5.png",
          price: "$15.99",
        },
        {
          id: 6,
          name: "Product 6",
          image: "img/logo.82b9c7a5.png",
          price: "$16.99",
        },
        {
          id: 7,
          name: "Product 7",
          image: "img/logo.82b9c7a5.png",
          price: "$17.99",
        },
        {
          id: 8,
          name: "Product 8",
          image: "img/logo.82b9c7a5.png",
          price: "$18.99",
        },
        {
          id: 9,
          name: "Product 9",
          image: "img/logo.82b9c7a5.png",
          price: "$19.99",
        },
        {
          id: 10,
          name: "Product 10",
          image: "img/logo.82b9c7a5.png",
          price: "$10.99",
        },
        {
          id: 11,
          name: "Product 11",
          image: "img/logo.82b9c7a5.png",
          price: "$11.99",
        },
        {
          id: 12,
          name: "Product 12",
          image: "img/logo.82b9c7a5.png",
          price: "$3.99",
        }
      ]
    }
  },
  methods: {
    //
  },
  mounted() {
   //
  },
}
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: auto 300px;
  justify-content: center;
}

.product-card {
  width: 200px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 30%;
  height: auto;
  margin-bottom: 10px;
}

.product-title {
  margin: 0;
  font-size: 16px;
  font-weight: bold;
}

.product-price {
  margin: 0;
  font-size: 14px;
  color: #888;
}

a{
    text-decoration: none;
}
</style>