var checkout = new Vue({
    el: '#checkout',
    data: {
        items: null,
    },
    methods: {
        getItems() {
            if ($cookies.isKey('cart')) {
                return JSON.parse($cookies.get('cart'));
            }
        },
        removeItem(item) {
            var array = JSON.parse($cookies.get('cart'));
            array.splice(array.indexOf(item), 1);
            this.items.splice(this.items.indexOf(item), 1);
            if(array.length > 0) {
                $cookies.set('cart', JSON.stringify(array));
            } else {
                $cookies.remove('cart');
                this.showButton = false;
                this.showCart = false;
            }
        },
        clear() {
            $cookies.remove('cart');
        }
    },
    beforeMount() {
        this.items = this.getItems();
    }
})