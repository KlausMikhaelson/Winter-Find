import axios from "axios";
const url = ''

export const payUsingpaytm = async (data) => {
    try {
        console.log("Payment api")
        let response = await axios.post(`${url}/products/paynow`, data);
        console.log(response.data)
        return response.data;
    } catch(err) {
        console.log("error",err)
    }
}