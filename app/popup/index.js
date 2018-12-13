new Vue({
    el: '#app',
    data: function () {
        return {}
    },
    methods: {
        createTab: function (url) {
            chrome.tabs.create({ url: url }, function (tab) { })
        }
    }
})