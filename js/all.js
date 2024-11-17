window.onload = function() {
var images = ["./img/manpic1.jpg", "./img/manpic2.jpg", "./img/manpic3.jpg", "./img/manpic4.jpg"];
var index = 0;

function showImage() {
    document.getElementById("carousel-image").src = images[index];
}

function nextImage() {
    index = (index + 1) % images.length;
    showImage();
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    showImage();
}

document.getElementById("next-button").onclick = nextImage;
document.getElementById("prev-button").onclick = prevImage;

var timer = setInterval(nextImage, 1000);
};

// 旁邊字串伸縮

document.addEventListener('DOMContentLoaded', (event) => {
    var uls = document.querySelectorAll('.catalog + ul');
    uls.forEach(function(ul){
        ul.previousElementSibling.addEventListener('click', function(event){
            var style = window.getComputedStyle ? getComputedStyle(ul, null) : ul.currentStyle;
            if (style.display === 'none') {
                ul.style.display = 'block';
            } else {
                ul.style.display = 'none';
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            imgSrc: './img/shopping_1.jpg',
            name: '商品名稱1',
            price: '價格1',
            rating: 4.5
        },
        {
            imgSrc: './img/shopping_1.jpg',
            name: '商品名稱2',
            price: '價格2',
            rating: 4.5
        },
        {
            imgSrc: './img/shopping_1.jpg',
            name: '商品名稱3',
            price: '價格3',
            rating: 4.5
        }
        // 可以添加更多的产品
    ];

    const productsContainer = document.getElementById('products-container');

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        productElement.innerHTML = `
            <img src="${product.imgSrc}" alt="${product.name}" width="300px">
            <div class="heart-icon">
                <i class='bx bx-heart'></i>
            </div>
            <div class="rating">
                ${getRatingStars(product.rating)}
            </div>
            <div class="price">
                <h4>${product.name}</h4>
                <p>${product.price}</p>
            </div>
            <div>
                <button class="button-buy">BUY</button>
            </div>
        `;

        productsContainer.appendChild(productElement);
    });

    function getRatingStars(rating) {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStar;

        return (
            `${'<i class="bx bx-star"></i>'.repeat(fullStars)}` +
            `${'<i class="bx bx-star-half"></i>'.repeat(halfStar)}` +
            `${'<i class="bx bx-star"></i>'.repeat(emptyStars)}`
        );
    }
});
