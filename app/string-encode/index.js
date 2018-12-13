/**
 * unicode 加密
 * 
 * @param {*} str 
 */
let unicode_encode = (str) => {
    var res = [];
    for (var i = 0; i < str.length; i++) {
        res[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
    }
    return "\\u" + res.join("\\u");
}

/**
 * unicode 解密
 * 
 * @param {*} str 
 */
let unicode_decode = (str) => {
    str = str.replace(/\\/g, "%");
    return unescape(str);
}

new Vue({
    el: '#app',
    data: function () {
        return {
            inputText: "Hello, World !",
            choose: "base64_encode",
            outText: "",
            radio3: ""
        }
    },
    methods: {
        build() {
            switch (this.choose) {
                case "base64_encode":
                    this.outText = window.btoa(this.inputText);
                    break;
                case "base64_decode":
                    try {
                        this.outText = window.atob(this.inputText);
                    } catch (error) {
                        this.outText = null;
                    }
                    break;
                case "unicode_encode":
                    this.outText = unicode_encode(this.inputText);
                    break;
                case "unicode_decode":
                    this.outText = unicode_decode(this.inputText);
                    break;
            }
        },
        clear() {
            this.inputText = null;
            this.outText = null;
        }
    }
})