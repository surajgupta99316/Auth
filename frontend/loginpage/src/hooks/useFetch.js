import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [inputdata, setInputdata] = useState([])
    const [password, setPassword] = useState([])
    const [userdata, setUserData] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const res = await axios.post(url);
                setInputdata(res.inputdata);
                setPassword(res.password);
                setUserData(res.userdata)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, [url]);

    return {inputdata,password,userdata}
};

export default useFetch;


/* 
const [data, setData] = useState({
    username:"",
    email:"",
    password:""
    });

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
        const response = await axios.post('http://localhost:4000/users/signup', {data});
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    return (
      <>
      <div>
      <form action='POST'> 
       <h1>Login page</h1>
        <label>Enter your username</label>
        <input placeholder='username' value={data.username} onChange={(e)=> setData(e.target.value)}/>
        <label>Enter your email</label>
        <input placeholder='email id' value={data.email} onChange={(e)=> setData(e.target.value)}/>
        <label>Enter your password</label>
        <input placeholder='password' value={data.password} onChange={(e)=> setData(e.target.value)}/>
        <input type="submit" value="Submit" onClick={handleSubmit} />
        </form>
        </div>
      </>
*/