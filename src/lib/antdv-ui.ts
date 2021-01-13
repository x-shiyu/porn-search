import {App} from 'vue'
import { Button, message } from 'ant-design-vue';


const components = [Button];
export default function (app:App) {
  components.forEach((com) => {
    app.use(com);
  });
  app.config.globalProperties.$message = message;
}
