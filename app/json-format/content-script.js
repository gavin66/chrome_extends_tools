(() => {
    "use strict"

    /**
     * 获取 json 字符串
     */
    let _json = () => {
        try {
            let bodyText = document.body.textContent || ''
            bodyText = bodyText.trim()

            if (!bodyText) {
                return false;
            }

            let jsonObj = JSON.parse(bodyText)

            if (!jsonObj) {
                return false
            }

            JSON.stringify(jsonObj)

            return jsonObj
        } catch (e) {
            return false
        }
    }

    /**
     * 无法使用
     * 沙盒运行,无法动态加载脚本
     * 
     * @param {*} url 
     */
    let _js = (url) => {
        return new Promise(function (resolve, reject) {
            var script = document.createElement('script');
            script.type = "text/javascript";

            script.onload = function () {
                resolve('success: ' + url);
            };

            script.onerror = function () {
                reject(Error(url + 'load error!'));
            };

            script.src = url;
            document.body.appendChild(script);
        });
    }

    /**
     * 格式化 json 字符串
     */
    let _format = () => {
        // 必须开启自动格式化
        chrome.storage.sync.get(null, (items) => {
            if (items.hasOwnProperty('optionsChecked') && items.optionsChecked.includes('json-auto')) {
                let jsonObj = _json()
                // 是 json 对象才能格式化
                if (jsonObj) {
                    document.body.innerHTML =
                        `<div id="app">
                        <vue-json-pretty
                            :data="json"
                            :path="'data'"
                            :show-length="true"
                            :path-checked="[]"
                            :path-selectable="((path, data) => true)"
                            :selectable-type="'tree'">
                        </vue-json-pretty>
                    </div>`

                    let vm = new Vue({
                        el: '#app',
                        data: function () {
                            return {
                                json: jsonObj,
                            }
                        }
                    })
                }
            }
        })
    }

    return { format: _format }
})().format()

