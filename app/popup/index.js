new Vue({
    el: '#app',
    data: function () {
        return {
            menus: {
                'json-format': ['JSON格式化', '../json-format/index.html'],
                'string-encode': ['字符串编码', '../string-encode/index.html'],
                'qrcode': ['二维码生成器', '../qrcode/index.html'],
                'image-upload': ['微博图床', '../image-upload/index.html'],
                'ocr': ['OCR文字识别', '../ocr/index.html'],
                'random': ['随机数生成器', '../random/index.html']
            },
            manifest: {}
        }
    },
    created: function () {
        let menus = {}
        chrome.storage.sync.get(null, (items) => {
            if (items.hasOwnProperty('menusChecked') && items.menusChecked.length > 0) {
                items.menusChecked.forEach(checked => {
                    menus[checked] = this.menus[checked]
                })
                this.menus = menus
            }
        })
        this.manifest = chrome.runtime.getManifest()
    },
    methods: {
        createTab: function (url) {
            chrome.tabs.create({ url: url }, function (tab) { })
        }
    }
})