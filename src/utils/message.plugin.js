export default {
    //custom plugin. Install calls Vue.js to apply custom plugin
    install(Vue) {
        /*instance property (to make data/util global) 
        Example: Vue.prototype.appName = 'My App'
        Now $appName is available on all Vue instances: some method: console.log(this.$appName) // My App
        here $message and $error (any variables).
        Must be registered in main.js
        */
        Vue.prototype.$message = function(html) {
            window.M.toast({html})
        }
        Vue.prototype.$error = function(html) {
            window.M.toast({html: `[Error]: ${html}`})
        }
    }   
}