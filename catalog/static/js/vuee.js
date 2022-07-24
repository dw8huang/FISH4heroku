<script type="text/javascript" src="{% static 'js/vuee.js' %}"></script>

var vm = new Vue({
    el: '#companylist',
    delimiters: ['[[', ']]'],
    data: {
        list: [
            "abc","Apple","Netflix","cde"
        ],
    },
});

var vm = new Vue({
    el: '#itemlist',
    delimiters: ['[[',']]'],
    data: {
        list:[
            "Item 1","Item 1A","Item 1B","Item 2",
            "Item 3","Item 4","Item 5","Item 6","Item 7",
            "Item 7A","Item 8","Item 9","Item 9A","Item 9B",
            "Item 10","Item 11","Item 12","Item 13","Item 14",
            "Item 15"
        ],
    },
});

const app = Vue.createApp({
    data() {
        return {
        isShow: true
    }
    }
});
app.mount('#app');