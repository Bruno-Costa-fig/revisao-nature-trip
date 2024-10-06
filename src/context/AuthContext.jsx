import { createContext } from "react"

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

 // os dados vão aqui
    function isLogado(){
        return localStorage.getItem("token")
    }

    const login = async (data) => {

        const response = await axios.post("https://api-nature-trip-revisao.onrender.com/login", data);
    
        if (response.data && response.status == 200) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          localStorage.setItem("isLogado", true)
          alert("Login executado com sucesso!")
          navigate("/")
        } else {
          alert("Não foi possível realizar o login")
        }
      };
    
      function logout () {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("isLogado")
        alert("Deslogado com sucesso!")
      }

    return (
        <AuthContext.Provider value={{isLogado, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}