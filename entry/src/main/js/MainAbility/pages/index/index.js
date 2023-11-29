import Router from '@system.router';
export default {
    data: {
        title: "",
        welcome: "欢迎登录"
    },
    onInit() {
        this.title = this.$t('strings.world');
    },
    Signup() {
        Router.push({
            uri: "pages/signup/signup"
        })
    }
}



