new Vue({
    el: '#app',
    data: function () {
        return {
            count: 1,
            min: 1,
            max: 100,
            repeated: true,
            size: 24,
            result: '结果展示'
        }
    },
    methods: {
        build() {
            if (this.check() == false) {
                return
            }

            if (this.repeated == true) {
                this.build_repeated()
            } else {
                if (this.count > this.max - this.min + 1) {
                    this.showErrorMessage('生成数量错误')
                } else {
                    // HTML 显示结果
                    let result = ''
                    // 范围内所有可能的数的数组
                    let data = []

                    // 放入数组中
                    for (let x = this.min; x <= this.max; x++) {
                        data.push(x)
                    }

                    data
                        .map((n, i, all) => {
                            // 打乱数组
                            const j = i + Math.floor(Math.random() * (all.length - i))
                            const v = all[j]
                            all[j] = n
                            return v
                        })
                        // 获取需要的个数
                        .slice(0, this.count)
                        // 循环结果待展示的 HTML
                        .forEach(val => {
                            result += val + ' '
                        })

                    this.result = result
                }
            }
        },
        /**
         * 随机数可重复的
         */
        build_repeated() {
            let min = Number(this.min)
            let max = Number(this.max)

            result = ''
            for (let x = 0; x < this.count; x++) {
                result += (Math.round(Math.random() * (max - min)) + min) + ' '
            }

            this.result = result
        },
        showErrorMessage(msg) {
            this.$message({
                showClose: true,
                message: msg,
                type: 'error'
            })
        },
        /**
         * 检查参数是否都正确
         */
        check() {
            let count = Number(this.count), min = Number(this.min), max = Number(this.max)

            if (Number.isNaN(count) || Number.isNaN(min) || Number.isNaN(max)) {
                this.showErrorMessage('请填入整数')
                return false
            }

            if(count <= 0){
                this.showErrorMessage('生成数量必须大于0')
                return false
            }

            this.count = count
            this.min = min
            this.max = max
        },
        sizeChange(size){
            document.querySelector('div.box-card').style.fontSize = size + 'px'
        }
    }
})