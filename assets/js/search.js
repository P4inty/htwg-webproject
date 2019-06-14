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
                '#',
                'Laktose Prävention'
            ),
            new Product(
                'Pollblock',
                'assets/img/product_2.png',
                '#',
                'Pollen'
            ),
            new Product(
                'Hairresist',
                'assets/img/product_3.png',
                '#',
                'Tierhaare'
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