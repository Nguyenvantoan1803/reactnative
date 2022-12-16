import axios from 'axios'
export const dangky = async(data)=>{
    const request = await axios.post(`http://localhost:5000/api/auth/register`,data, {
        headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    }})
    return request.data
}

// const dangky = async (params) => {
//     const res = await fetch("http://192.168.5.48:5000/api/auth/login", {
//       method: "POST",
//       body: params,
//       headers: { "Content-Type": "application/json" },
//     });
//     return res.json();
//   };
//   export default { dangky };