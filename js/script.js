const navbarNav = document.querySelector(".navbar-nav")
const hamburgerMenu = document.getElementById("hamburger-menu")
const search = document.querySelector('.navbar-extra a#search')
const searchForm = document.querySelector('.search-form')
const searchBox = document.getElementById('search-box')
const shoppingCart = document.getElementById('shopping-cart')
const shoppingCartMenu = document.querySelector('.shopping-card-menu')
const tombolDetailProduk = document.querySelectorAll('.item-detail-btn')
const closeDetailProduk = document.querySelector('.modal-container .close')
const modal = document.getElementById('item-detail-modal')
const modalContainer = document.querySelector('.modal-container')

// ? responsifitas hamburger menu jika diklik menampilkan list daftar isi
hamburgerMenu.onclick = () => {
    navbarNav.classList.toggle('active')
}

// ? fitur jika mengklik semua tempat selain daerah hamburger menu dan listnya akan memenghilangkan class active.
document.addEventListener('click', function(e){
    if(!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active')
    }
})


search.addEventListener('click',function(e){
    searchForm.classList.toggle('active')
    searchBox.focus();
    e.preventDefault();
}) 

document.addEventListener('click', function(e){
    if(!search.contains(e.target) && !searchForm.contains(e.target)){
        searchForm.classList.remove('active')
    }
})

shoppingCart.onclick = (e) => {
    shoppingCartMenu.classList.toggle('active')
    e.preventDefault()
}

document.addEventListener('click', function(e){
    if(!shoppingCart.contains(e.target) && !shoppingCartMenu.contains(e.target)){
        shoppingCartMenu.classList.remove('active')
    }
})

tombolDetailProduk.forEach((btn) => {
    btn.onclick = (e) => {
        modal.style.display = 'flex'
        e.preventDefault()
    }
});

window.onclick = (e) => {
    if(e.target === modal){
        modal.style.display = 'none'
    }
}

closeDetailProduk.onclick = (e) => {
        modal.style.display = 'none';
        e.preventDefault();
    }