import axios from "axios";
const instance = axios.create({
    baseURL: "http://localhost:3000/",
});

export default instance;

// run json-server --watch db.json --port 3000 to start the server  