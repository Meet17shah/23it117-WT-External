// Product data
const products = [
    {
        id: 1,
        name: "Laptop",
        price: 999.99,
        rating: 4.5,
        image: "https://via.placeholder.com/200x200?text=Laptop"
    },
    {
        id: 2,
        name: "Smartphone",
        price: 599.99,
        rating: 4.7,
        image: "https://via.placeholder.com/200x200?text=Smartphone"
    },
    {
        id: 3,
        name: "Headphones",
        price: 199.99,
        rating: 4.3,
        image: "https://via.placeholder.com/200x200?text=Headphones"
    },
    {
        id: 4,
        name: "Smartwatch",
        price: 249.99,
        rating: 4.6,
        image: "https://via.placeholder.com/200x200?text=Smartwatch"
    }
];


let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

// Render products
function renderProducts() {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <p>Rating: ${product.rating}/5</p>
            <div class="product-actions">
                <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                <button class="add-to-wishlist" onclick="addToWishlist(${product.id})">♡</button>
            </div>
        `;
        grid.appendChild(productCard);
    });

    updateCartCount();
    updateWishlistCount();
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!cart.some(item => item.id === productId)) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    }
}

// Add to Wishlist
function addToWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (!wishlist.some(item => item.id === productId)) {
        wishlist.push(product);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        updateWishlistCount();
    }
}

// Update Cart Count
function updateCartCount() {
    const cartCountEl = document.getElementById('cart-count');
    cartCountEl.textContent = cart.length;
}

// Update Wishlist Count
function updateWishlistCount() {
    const wishlistCountEl = document.getElementById('wishlist-count');
    wishlistCountEl.textContent = wishlist.length;
}

// Initial render
renderProducts();