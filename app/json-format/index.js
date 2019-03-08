new Vue({
    el: '#app',
    data: function () {
        return {
            json: '',
            example: `{"time":"2019-02-26 10:49:53","cityInfo":{"city":"北京市","cityId":"101010100","parent":"北京","updateTime":"10:18"},"date":"20190226","message":"Success !","status":200,"data":{"shidu":"28%","pm25":45,"pm10":83,"quality":"良","wendu":"4","ganmao":"极少数敏感人群应减少户外活动","yesterday":{"date":"25","sunrise":"06:56","high":"高温 11.0℃","low":"低温 -2.0℃","sunset":"18:00","aqi":24,"ymd":"2019-02-25","week":"星期一","fx":"南风","fl":"<3级","type":"多云","notice":"阴晴之间，谨防紫外线侵扰"},"forecast":[{"date":"26","sunrise":"06:55","high":"高温 10.0℃","low":"低温 -2.0℃","sunset":"18:01","aqi":65,"ymd":"2019-02-26","week":"星期二","fx":"东南风","fl":"<3级","type":"多云","notice":"阴晴之间，谨防紫外线侵扰"},{"date":"27","sunrise":"06:54","high":"高温 12.0℃","low":"低温 -1.0℃","sunset":"18:03","aqi":70,"ymd":"2019-02-27","week":"星期三","fx":"西南风","fl":"<3级","type":"多云","notice":"阴晴之间，谨防紫外线侵扰"},{"date":"28","sunrise":"06:52","high":"高温 13.0℃","low":"低温 0.0℃","sunset":"18:04","aqi":55,"ymd":"2019-02-28","week":"星期四","fx":"西南风","fl":"<3级","type":"晴","notice":"愿你拥有比阳光明媚的心情"},{"date":"01","sunrise":"06:51","high":"高温 14.0℃","low":"低温 2.0℃","sunset":"18:05","aqi":53,"ymd":"2019-03-01","week":"星期五","fx":"北风","fl":"<3级","type":"多云","notice":"阴晴之间，谨防紫外线侵扰"},{"date":"02","sunrise":"06:49","high":"高温 14.0℃","low":"低温 1.0℃","sunset":"18:06","aqi":64,"ymd":"2019-03-02","week":"星期六","fx":"南风","fl":"<3级","type":"多云","notice":"阴晴之间，谨防紫外线侵扰"},{"date":"03","sunrise":"06:48","high":"高温 13.0℃","low":"低温 0.0℃","sunset":"18:07","aqi":47,"ymd":"2019-03-03","week":"星期日","fx":"西南风","fl":"<3级","type":"多云","notice":"阴晴之间，谨防紫外线侵扰"},{"date":"04","sunrise":"06:46","high":"高温 14.0℃","low":"低温 1.0℃","sunset":"18:08","ymd":"2019-03-04","week":"星期一","fx":"西南风","fl":"<3级","type":"多云","notice":"阴晴之间，谨防紫外线侵扰"},{"date":"05","sunrise":"06:45","high":"高温 15.0℃","low":"低温 2.0℃","sunset":"18:09","ymd":"2019-03-05","week":"星期二","fx":"西南风","fl":"<3级","type":"多云","notice":"阴晴之间，谨防紫外线侵扰"},{"date":"06","sunrise":"06:43","high":"高温 13.0℃","low":"低温 0.0℃","sunset":"18:10","ymd":"2019-03-06","week":"星期三","fx":"北风","fl":"<3级","type":"晴","notice":"愿你拥有比阳光明媚的心情"},{"date":"07","sunrise":"06:42","high":"高温 13.0℃","low":"低温 0.0℃","sunset":"18:11","ymd":"2019-03-07","week":"星期四","fx":"西南风","fl":"<3级","type":"晴","notice":"愿你拥有比阳光明媚的心情"},{"date":"08","sunrise":"06:40","high":"高温 13.0℃","low":"低温 0.0℃","sunset":"18:12","ymd":"2019-03-08","week":"星期五","fx":"南风","fl":"<3级","type":"多云","notice":"阴晴之间，谨防紫外线侵扰"},{"date":"09","sunrise":"06:39","high":"高温 14.0℃","low":"低温 3.0℃","sunset":"18:14","ymd":"2019-03-09","week":"星期六","fx":"南风","fl":"<3级","type":"多云","notice":"阴晴之间，谨防紫外线侵扰"},{"date":"10","sunrise":"06:37","high":"高温 12.0℃","low":"低温 1.0℃","sunset":"18:15","ymd":"2019-03-10","week":"星期日","fx":"东风","fl":"<3级","type":"多云","notice":"阴晴之间，谨防紫外线侵扰"},{"date":"11","sunrise":"06:35","high":"高温 12.0℃","low":"低温 1.0℃","sunset":"18:16","ymd":"2019-03-11","week":"星期一","fx":"南风","fl":"<3级","type":"多云","notice":"阴晴之间，谨防紫外线侵扰"},{"date":"12","sunrise":"06:34","high":"高温 14.0℃","low":"低温 3.0℃","sunset":"18:17","ymd":"2019-03-12","week":"星期二","fx":"南风","fl":"<3级","type":"晴","notice":"愿你拥有比阳光明媚的心情"}]}}`
        }
    },
    computed: {
        jsonObject() {
            try {
                return JSON.parse(this.json)
            } catch (err) {
                // 错误处理
                return null
            }
        }
    },
    methods: {
        handleClick(path, data) {
            // console.log(path)

            //复制功能(未完成)
            // let input = document.createElement('textarea');
            // input.style.position = 'fixed';
            // input.style.opacity = 0;
            // input.value = data;
            // document.body.appendChild(input);
            // input.select();
            // document.execCommand('Copy');
            // document.body.removeChild(input);
        }
    }
})