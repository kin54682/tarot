window.onload = function() {
    // 商品展示
    let products = [
        {
            imgSrc: "./img/shopping_4.jpg",
            text: "本周趨勢",
            name: "商品名稱1",
            price: "價格1",
            link: "#" 
        },
        {
            imgSrc: "./img/pr_img/123.jfif",
            text: "新品上市",
            name: "韓版oversize大學T",
            price: "NT599",
            link: "./pr.html" 
        },
        {
            imgSrc: "./img/shopping_2.jpg",
            text: "新品上市",
            name: "商品名稱3",
            price: "價格3",
            link: "#" 
        },
        {
            imgSrc: "./img/shopping_5.jpg",
            text: "新品上市",
            name: "商品名稱4",
            price: "價格3",
            link: "#" 
        },
        {
            imgSrc: "./img/shopping_3.jpg",
            text: "新品上市",
            name: "商品名稱5",
            price: "價格3",
            link: "#" 
        },
        {
            imgSrc: "./img/shopping_1.jpg",
            text: "新品上市",
            name: "商品名稱6",
            price: "價格3",
            link: "#" 
        },
    ];

    let productsContainer = document.querySelector(".products");
    products.forEach(product => {
        let productElement = document.createElement("div");
        productElement.classList.add("product");

        let productLink = document.createElement("a"); 
        productLink.href = product.link; 

        productLink.innerHTML = `
            <img src="${product.imgSrc}" alt="" width="300px">
        `;

        productElement.appendChild(productLink); 

        productElement.innerHTML += `
            <div class="products-text">
                <h5>${product.text}</h5>
            </div>
            <div class="heart-icon">
                <i class='bx bx-heart'></i>
            </div>
            <div class="rating">
                <i class='bx bx-star'></i>
                <i class='bx bx-star'></i>
                <i class='bx bx-star'></i>
                <i class='bx bx-star'></i>
                <i class='bx bx-star-half'></i>
            </div>
            <div class="price">
                <h4>${product.name}</h4>
                <p>${product.price}</p>
            </div>
            <div>
                <button class="btn button-buy">
                    <p class="buy-p">BUY</p>
                </button>
            </div>
        `;
        productsContainer.appendChild(productElement);
    });

    const menuIcon = document.getElementById('menu-icon');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const navMenu = document.querySelector('.nav-menu ul');

    menuIcon.addEventListener('click', function() {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    // 點擊頁面其他位置隱藏下拉菜單
    document.addEventListener('click', function(e) {
        if (!dropdownMenu.contains(e.target) && e.target !== menuIcon) {
            dropdownMenu.style.display = 'none';
        }
    });

    // 搜索圖示點擊事件
    const searchIcon = document.getElementById('search-icon');
    const searchArea = document.getElementById('search-area');

    searchIcon.addEventListener('click', function() {
        searchArea.style.display = searchArea.style.display === 'block' ? 'none' : 'block';
    });

    // 如果希望點擊其他區域也可以隱藏搜索區域，可以增加如下代碼
    document.addEventListener('click', function(e) {
        if (!searchArea.contains(e.target) && e.target !== searchIcon) {
            searchArea.style.display = 'none';
        }
    });

    // 將 nav-menu 的內容移動到 dropdown-menu 中
    const dropdownMenuUl = dropdownMenu.querySelector('ul');
    dropdownMenuUl.innerHTML += navMenu.innerHTML;

    // 图片轮播 
    var images = ["image1", "image2", "image3", "image4"];
    var index = 1;

    function showImage() {
        images.forEach(function(imgId, i) {
            var img = document.getElementById(imgId);
            img.classList.remove("active", "prev", "next");
        });

        var currentImg = document.getElementById(images[index]);
        currentImg.classList.add("active");

        var prevIndex = (index - 1 + images.length) % images.length;
        var nextIndex = (index + 1) % images.length;

        var prevImg = document.getElementById(images[prevIndex]);
        var nextImg = document.getElementById(images[nextIndex]);

        prevImg.classList.add("prev");
        nextImg.classList.add("next");
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

    var timer = setInterval(nextImage, 2000);

    var carouselContainer = document.querySelector(".carousel-container");
    carouselContainer.onmouseover = function() {
        clearInterval(timer);
    };
    carouselContainer.onmouseout = function() {
        timer = setInterval(nextImage, 2000);
    };
    showImage();
    
    document.addEventListener("DOMContentLoaded", function() {
        fetch('get_username.php')
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    document.getElementById('username').textContent = data.error;
                } else {
                    document.getElementById('username').textContent = data.username + ' 先生';
                }
            })
            .catch(error => console.error('Error:', error));
    });
};


