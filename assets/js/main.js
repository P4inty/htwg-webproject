var nav = new Vue({
    el: '#navbar',
    data: {
        isActive: false,
    },
});

var disclaimer = new Vue({
    el: '#disclaimer',
    data: {
        show: true,
    },
    methods: {
        accept(accept) {
            $cookies.config('365d');
            $cookies.set('cookie_disclaimer', accept);
            this.show = false;
        }
    },
    beforeMount() {
        if($cookies.isKey('cookie_disclaimer')) {
            this.show = false;
        }
    }
});

var cart = new Vue({
    el: '#cart',
    data: {
        showButton: false,
        showCart: false,
        items: null,
    },
    methods: {
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
        getItems() {
            if($cookies.isKey('cart')) {
                return JSON.parse($cookies.get('cart'));
            }
        }
    },
    beforeMount() {
        this.showButton = $cookies.isKey('cart');
        this.items = this.getItems();
    }
});