import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from "axios";
import { Form, FormItem, Input, Button, Message } from "element-ui";

import "./assets/css/global.css";
import "./assets/fonts/iconfont.css";

Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Button);

axios.defaults.baseURL = "https://www.liulongbin.top:8888/api/private/v1/";
Vue.prototype.$http = axios;
Vue.prototype.$message = Message;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
