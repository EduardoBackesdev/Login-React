import { useState } from "react"
import './Style/MyForm.css'

const MyForm = () =>{

    const [name, setName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, password);
        setName("");
        setPassword("");
    };




    return (
        <div className="MyForm">
            
            <form onSubmit={handleSubmit}>
                <input value={name} type="text" name="login" onChange={(e)=> setName(e.target.value)} placeholder="Seu login" />
                <input value={password} type="password" name="password" onChange={(e)=> setPassword(e.target.value)} placeholder="Sua senha"/>
                <input id="login" type="submit" name="submit" value="Entrar"/>
            </form>

        </div>
    )

}

export default MyForm