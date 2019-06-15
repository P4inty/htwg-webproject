var cookie = new Vue({
    el: '#cookie',
    methods: {
        setCookie(key, value) {
            if (this.canSetCookie) {
                $cookies.set(key, value);
            }
        },
        addToCookie(key, value) {
            var array = [];
            if ($cookies.isKey(key)) {
                array = JSON.parse($cookies.get(key));
            }
            if(!array.includes(value)) {
                array.push(value);
            }
            console.log(array);
            this.setCookie(key, JSON.stringify(array));
        },
        canSetCookie() {
            if ($cookies.isKey('cookie_disclaimer')) {
                if ($cookies.get('cookie_disclaimer') == 'true') {
                    return true;
                }
            }
            return false;
        }
    }
});