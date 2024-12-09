document.addEventListener('alpine:init', () => {
    Alpine.data('products',() =>({
        items: [
            {id: 1, name: 'Robusta Brazil', img: '1.jpg', price: 20000},
            {id: 2, name: 'Arabica Blend', img: '2.jpg', price: 25000},
            {id: 3, name: 'Primo Passo', img: '3.jpg', price: 30000},
            {id: 4, name: 'Aceh Gayo', img: '4.jpg', price: 35000},
            {id: 5, name: 'Sumatra Mandheling', img: '5.jpg', price: 40000},
            ]
    }))

    Alpine.store('cart',{
        items:[],
        total: 0,
        quantity: 0,
        add(newItem){
            // ngecek barang yang sama di cart
            const cardItem = this.items.find((item) => item.id === newItem.id);
            
            //jika cart masih kosong
            if(!cardItem){
            this.items.push({...newItem,quantity:1, total:newItem.price})
            this.quantity++;
            this.total += newItem.price;
            }else{
                // jika barang sudah ada cek apakah barang satu jenis atau berbeda
                this.items = this.items.map((item) => {
                //barang beda jenis
                if(item.id !== newItem.id){
                    return item;
                }else{
                    // jika barang satu jenis
                    item.quantity++;
                    item.total = item.price * item.quantity;
                    this.quantity++;
                    this.total += item.price;
                    return item;
                }
                })
            }
        },

        remove(id){
            // ngecek barang yang sama di cart
            const cardItem = this.items.find((item) => item.id === id);

                // jika barang lebih dari 1
                if(cardItem.quantity > 1){
                    // telusuri satu satu
                    this.items = this.items.map((item) =>{
                        // jika barang bukan yang di click
                    if(item.id !== id){
                        return item;
                    }else{
                            item.quantity--;
                            item.total = item.price * item.quantity;
                            this.quantity--;
                            this.total -= item.price;
                            return item;
                    }
                    })
                }
                else if(cardItem.quantity === 1){
                    // barang hanya 1
                    this.items = this.items.filter((item) => item.id !== id);
                    this.quantity--;
                    this.total -= cardItem.price;
                }
            }
    })
})

// validasi form
const checkoutButton = document.querySelector(".checkoutButton")
checkoutButton.disabled = true
const form = document.querySelector('#checkoutForm')

form.addEventListener('keyup', function(){
    for(let i=0; i< form.elements.length; i++){
        if(form.elements[i].value.length !==0){
        checkoutButton.classList.remove('disabled')
        checkoutButton.classList.add('disabled')
    }else{
            return false;
        }
        checkoutButton.disabled = false;
        checkoutButton.classList.remove('disabled')
    }});

// konversi ke rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID',{
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(number);
}
