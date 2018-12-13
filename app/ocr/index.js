let app = new Vue({
    el: '#app',
    data: function () {
        return {
            image: {},
            inputText: null,
            imageDialogVisible: false,
            language: 'chi_sim',
            languages: [
                {
                    lang: 'chi_sim',
                    language: 'Chinese',
                    comment: '简体中文',
                },
                {
                    lang: 'chi_tra',
                    language: 'Traditional Chinese',
                    comment: '繁体中文',
                },
                {
                    lang: 'eng',
                    language: 'English',
                    comment: '英语',
                },
                {
                    lang: 'fra',
                    language: 'French',
                    comment: '法语',
                },
                {
                    lang: 'ita',
                    language: 'Italian',
                    comment: '意大利语',
                },
                {
                    lang: 'jpn',
                    language: 'Japanese',
                    comment: '日语',
                },
                {
                    lang: 'kor',
                    language: 'Korean',
                    comment: '韩语',
                },
                {
                    lang: 'rus',
                    language: 'Russian',
                    comment: '俄语',
                }
            ]
        }
    },
    methods: {
        preview() {
            this.imageDialogVisible = true;
        },
        build() {
            if (this.image.raw) {
                const loading = this.$loading({
                    lock: true,
                    text: '识别中...',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                // 测试图片地址 "http://tesseract.projectnaptha.com/img/eng_bw.png"
                Tesseract.recognize(this.image.raw, {
                    lang: this.language,
                    classify_bln_numeric_mode: 1
                }).then(
                    (result) => {
                        this.inputText = result.text;
                        loading.close();
                    }
                );
            }
        },
        clear() {
            this.image = {};
            this.inputText = null;
            this.language = 'chi_sim';
        },
        handleClick(event) {
            this.$refs.input.value = null;
            this.$refs.input.click();
        },
        handleChange(event) {
            const images = event.target.files;
            if (!images) return;
            this.handleImages(images);
        },
        handleImages(images) {
            let rawImages = Array.prototype.slice.call(images).slice(0);

            if (rawImages.length === 0) { return; }
            let rawImage = rawImages[0];

            this.image = {
                name: rawImage.name,
                size: rawImage.size,
                raw: rawImage,
                url: window.URL.createObjectURL(rawImage)
            };
        }
    }
})