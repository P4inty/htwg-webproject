class Product {
    constructor(title, imgLink, link, category) {
        this.title = title;
        this.imgLink = imgLink;
        this.link = link;
        this.category = category;
    }
}

var search = new Vue({
    el: '#searchbar',
    data: {
        showMenu: false,
        search: '',
        products: [
            new Product(
                'Lactohelp',
                'assets/img/product_1.png',
                '1',
                'Laktose Prävention'
            ),
            new Product(
                'Pollblock',
                'assets/img/product_2.png',
                '2',
                'Pollen Prävention'
            ),
            new Product(
                'Hairresist',
                'assets/img/product_3.png',
                '3',
                'Tierhaare Prävention'
            ),
            new Product(
                'Glutaway',
                'assets/img/product_4.png',
                '4',
                'Gluten Prävention'
            ),
            new Product(
                'Lactostop',
                'assets/img/product_5.png',
                '5',
                'Laktose Akut'
            ),
            new Product(
                'Hairprevent',
                'assets/img/product_6.png',
                '6',
                'Tierhaare Akut'
            ),
            new Product(
                'Pollgo',
                'assets/img/product_7.png',
                '7',
                'Pollen Akut'
            )
        ],
    },
    computed: {
        searchedProducts() {
            return this.products.filter(product => {
                return product.title.toLowerCase().includes(this.search.toLowerCase()) ||
                    product.category.toLowerCase().includes(this.search.toLowerCase());
            })
        }
    },
    beforeMount() {
        if($cookies.isKey('query')) {
            this.search = $cookies.get('query');
            $cookies.remove('query');
        }
    }
});