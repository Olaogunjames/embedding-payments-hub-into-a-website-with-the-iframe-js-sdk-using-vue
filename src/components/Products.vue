<template>
    <h1>Products List</h1>
    <div class="product-list">
        <div v-for="product in products" :key="product.id" class="product-card">
           <RouterLink to="/make-payment" @click="saveToLocalStorage(product)">
                <img :src="product.image" alt="Product Image" class="product-image" />
                <h3 class="product-title">{{ product.name }}</h3>
                <p class="product-price">${{ product.price }}</p>
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
          price: "1.99",
          description: 'This is my favorite product 1',
        },
        {
          id: 2,
          name: "Product 2",
          image: "img/logo.82b9c7a5.png",
          price: "1.59",
          description: 'This is my favorite product 2',
        },
        {
          id: 3,
          name: "Product 3",
          image: "img/logo.82b9c7a5.png",
          price: "1.97",
          description: 'This is my favorite product 3',
        },
        {
          id: 4,
          name: "Product 4",
          image: "img/logo.82b9c7a5.png",
          price: "1.19",
          description: 'This is my favorite product 4',
        },
        {
          id: 5,
          name: "Product 5",
          image: "img/logo.82b9c7a5.png",
          price: "1.39",
          description: 'This is my favorite product 5',
        },
        {
          id: 6,
          name: "Product 6",
          image: "img/logo.82b9c7a5.png",
          price: "1.22",
          description: 'This is my favorite product 6',
        },
        {
          id: 7,
          name: "Product 7",
          image: "img/logo.82b9c7a5.png",
          price: "1.44",
          description: 'This is my favorite product 7',
        },
        {
          id: 8,
          name: "Product 8",
          image: "img/logo.82b9c7a5.png",
          price: "18.99",
          description: 'This is my favorite product 8',
        },
        {
          id: 9,
          name: "Product 9",
          image: "img/logo.82b9c7a5.png",
          price: "1.76",
          description: 'This is my favorite product 9',
        },
        {
          id: 10,
          name: "Product 10",
          image: "img/logo.82b9c7a5.png",
          price: "1.32",
          description: 'This is my favorite product 10',
        },
        {
          id: 11,
          name: "Product 11",
          image: "img/logo.82b9c7a5.png",
          price: "1.71",
          description: 'This is my favorite product 11',
        },
        {
          id: 12,
          name: "Product 12",
          image: "img/logo.82b9c7a5.png",
          price: "1.09",
          description: 'This is my favorite product 12',
        }
      ]
    }
  },
  methods: {
    saveToLocalStorage(product){
      localStorage.setItem("productData", JSON.stringify(product));
    }
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