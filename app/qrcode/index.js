let app = new Vue({
    el: '#app',
    data: function () {
        return {
            inputText: 'Hello, World!',
            images: []
        }
    },
    methods: {
        build() {
            /**
             * 生成二维码
             * 按回车分割
             */
            this.inputText.split('\n').forEach(content => {
                this.images.push({ content: content, text: this._utf16to8(content), size: 200 });
            });
        },
        clearInput(){
            this.inputText = '';
        },
        clearQr() {
            /**
             * 清空已生成的二维码
             */
            this.images = [];
        },
        downloadBatch() {
            /**
             * 处理批量下载事件
             */
            let downloadButtonComponents = this.$refs['qr-cvs-btn'];
            if (downloadButtonComponents instanceof Array && downloadButtonComponents.length > 0) {
                downloadButtonComponents.forEach(component => {
                    // 触发点击事件
                    component.$el.click();
                });
            }

        },
        downloadClick(event) {
            let qrCardElement = event.srcElement.closest('.qr-card');
            if (qrCardElement instanceof Element) {
                let base64Image = qrCardElement.querySelector('.qrcode > canvas').toDataURL();
                let link = document.createElement('a');
                link.download = btoa(this._utf16to8(qrCardElement.querySelector('.el-card__body span.qr-cnt').textContent)).substring(0, 20) + '.png';
                link.href = base64Image;
                link.click();
            }
            /**
             * 处理二维码下载事件
             */
            // if (event.path.length > 5 && event.path[4].className == 'el-card__body') {
            //     let base64Image = event.path[4].querySelector('canvas').toDataURL();
            //     let link = document.createElement('a');
            //     link.download = btoa(this._utf16to8(event.path[3].querySelector("span").textContent)).substring(0, 20) + '.png';
            //     link.href = base64Image;
            //     link.click();
            // }
        },
        _utf16to8(str) {
            /**
             * 处理中文等非 utf8 编码的
             */
            var out, i, len, c;
            out = "";
            len = str.length;
            for (i = 0; i < len; i++) {
                c = str.charCodeAt(i);
                if ((c >= 0x0001) && (c <= 0x007F)) {
                    out += str.charAt(i);
                } else if (c > 0x07FF) {
                    out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
                    out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
                    out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
                } else {
                    out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
                    out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
                }
            }
            return out;
        }
    }
})