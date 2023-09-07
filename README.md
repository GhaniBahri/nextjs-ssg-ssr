# Overview

We're going to increase the intensity up a notch. This time you will create an e-commerce website. Just the same idea, but different tactics.

Go [here](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes) whenever you feel lost

This project already supports tailwindcss out of the box so feel free to use it.

## Requirements

Note: Yes, requirements, not instructions. Work with your partner to find what needs to be done to finish the needed deliverables :D. Let us know in Discord if you need any help. Also, if you finish early and think you can help, let us know.

1. Create a new page to host all the posts. You should fetch all the posts from the JSONPlaceholder API. Route of this page is `/products`
2. Create a new page to show the post information. You should fetch the post information from the JSONPlaceholder API. This page should have a route that points to `/products/{id}`

```jsx
const ALL_PRODUCTS_URL = "https://fakestoreapi.com/products";

const ONE_PRODUCT_URL = "https://fakestoreapi.com/products/${postId}";
```

2. In the `/products` page, map over all the posts and show their titles and prices. The titles should be clickable and would take the user to a new page `/products/{id}` that will show the rest of the product's information.
3. In `/products/[id]` page, use the `getServerSideProps` to fetch the products' information and show it to the user. You can use the `ONE_PRODUCT_URL` to fetch the products' information.

Note: You don't have to do HTML and CSS from scratch, you can always find resources online and use them for the sake of time. Look at [this](https://tailwindcomponents.com/component/post-artical) as an example.
