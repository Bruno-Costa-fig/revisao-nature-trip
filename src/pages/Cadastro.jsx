import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import useAxios from '../hooks/useAxios';

const Cadastro = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const token = localStorage.getItem('token');
        try {
            // const response = await axios.post('http://localhost:3000/users', data, {
            //     headers: {
            //         'Authorization': `${token}`,
            //         'Content-Type': 'application/json'
            //     }
            // });
            const response = await useAxios.post('/users', data);
            console.log(response.data);
        } catch (error) {
            console.error('There was an error registering the user!', error);
        }
    };

    return (
        <div>
            <h2>Cadastro de Usuário</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Nome:</label>
                    <input {...register('nome', { required: true })} />
                    {errors.nome && <span>Nome é obrigatório</span>}
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" {...register('email', { required: true })} />
                    {errors.email && <span>Email é obrigatório</span>}
                </div>
                <div>
                    <label>Senha:</label>
                    <input type="password" {...register('senha', { required: true })} />
                    {errors.senha && <span>Senha é obrigatória</span>}
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default Cadastro;