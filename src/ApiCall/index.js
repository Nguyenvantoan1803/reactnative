import axios from 'axios'
export const dangky = async(data)=>{
    const request = await axios.post(`http://localhost:5000/api/auth/register`,data, {
        method: "POST",
        headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    }})
    console.log(request)
    return request
}

export const login = async(data)=>{
    const request = await fetch(`http://localhost:5000/api/auth/login`,data, {
        method: "POST",
        body: data,
        headers: { "Content-Type": "application/json" },})
    console.log(request.data,"xcgdfhh")
    return request.json();
}

export const sendemail = async(data)=>{
    const request = await axios.post(`http://localhost:5000/api/auth/sendemail`,data, {
        headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    }})
    console.log(request,"xcgdfhh")
    return request
}

// export const login = async (params) => {
//     console.log(params,"params")
//     const res = await fetch("http://192.168.5.136:5000/api/auth/login",params, {
//       method: "POST",
//       body: params,
//       headers: { "Content-Type": "application/json" },
//     });
//     return res.json();
//   };
 

