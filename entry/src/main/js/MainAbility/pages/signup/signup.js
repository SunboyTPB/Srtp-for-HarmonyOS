import Router from "@system.router";

export default {
    data: {
        title: "",
        message: "欢迎注册！"
    },
    onInit() {
        this.title = "Hello World";
    },
    back() {
        Router.back();
    }
}
