import axios from "axios";
class HelloWorldService {
  executeHelloWorldService() {
    console.log("Hello World Service");
    return axios.get("http://localhost:8080/hello");
  }

  executeHelloWorldBeanService() {
    console.log("Hello World Bean Service");
    return axios.get("http://localhost:8080/hello-bean");
  }

  executeHelloWorldPathService(name) {
    console.log("Hello World Path Service");
    return axios.get(`http://localhost:8080/hello/${name}`);
  }
}

export default new HelloWorldService();
