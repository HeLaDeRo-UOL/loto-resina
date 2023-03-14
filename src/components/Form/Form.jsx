import {useState} from "react";

const Form = () => {

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    
        const [userData, setUserData] = useState({name: "", email:""})


    const handleChangle = (e) => {
        setName(e.target.value);
    };

    const handleChangle2 = (e) => {
        setEmail(e.target.value);
    }

    console.log(name);
    console.log(email);
  return (
    <div>
        <form action="">
            <input type="text" placeholder="ingrese su nombre" onChange={handleChangle} name="name"/>
            <button>Enviar</button>
            <input type="text" placeholder="ingrese email" name="email" onChange={handleChangle2}/>
            <input type="text" placeholder="ingrese pasword" name="password" />
        </form>
    </div>
  )
}

export default Form;