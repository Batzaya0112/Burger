import axios from "axios";

const instance = axios.create({
    baseURL: "https://db-burger-order-default-rtdb.asia-southeast1.firebasedatabase.app/"
});
 export default instance;