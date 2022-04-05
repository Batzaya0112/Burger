import axios from "axios";

const instance = axios.create({
    baseURL: "https://burger-cd19c-default-rtdb.asia-southeast1.firebasedatabase.app/"
});
 export default instance;