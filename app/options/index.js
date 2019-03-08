new Vue({
    el: '#app',
    data: function () {
        return {
            menus: {
                'json-format': 'JSON格式化',
                'string-encode': '字符串编码',
                'qrcode': '二维码生成器',
                'image-upload': '微博图床',
                'ocr': 'OCR文字识别',
                'random': '随机数生成器'
            },
            options: {
                'json-auto': 'JSON 自动格式化'
            },
            menusChecked: [],
            optionsChecked: []
        }
    },
    created: function () {
        chrome.storage.sync.get(null, (items) => {
            if (items.hasOwnProperty('menusChecked')) {
                this.menusChecked = items['menusChecked']
            }
            if (items.hasOwnProperty('optionsChecked')) {
                this.optionsChecked = items['optionsChecked']
            }
        })
    },
    methods: {
        confirm() {
            chrome.storage.sync.set({ 'menusChecked': this.menusChecked, 'optionsChecked': this.optionsChecked }, () => {
                this.$message({
                    message: '修改成功, 2秒后关闭页面',
                    type: 'success',
                    center: true,
                    duration: 2000,
                    onClose(){
                        window.close()
                    }
                });
            })
        },
        close() {
            window.close()
        }
    }
})