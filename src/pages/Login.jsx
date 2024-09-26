import { useEffect, useState } from "react"
import {useForm} from "react-hook-form"
import axios from "axios"

function Login(){

    const {register, handleSubmit, formState: {errors}, reset} = useForm()

    async function validarLogin(dados){
       try {
            const response = await axios.post("http://localhost:3000/login", dados)

            if(!!response && response.status == 200){
                const {token, user} = response.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
            }
       } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(validarLogin)}>
                <label htmlFor="email">Usuário:</label>
                <input type="text" placeholder="Digite o email" {...register("email", {required: true})} />
                {errors.email && <span>Campo obrigatório</span>}

                <label htmlFor="senha">Senha</label>
                <input type="password" placeholder="Digite a senha" {...register("senha", {required: true})} />
                {errors.senha && <span>Campo obrigatório</span>}
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}

export default Login
