import { useState } from "react";
import validation from "../helpers/validation";

function Login({ login }) {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        email: "Email required",
        password: "Password required",
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validar si hay errores antes de intentar iniciar sesión
        for (let error in errors) {
            if (errors[error] !== "") {
                alert("Hay errores en el formulario. Corrige los campos.");
                return;  // Evitar enviar si hay errores
            }
        }

        // Llamar a la función de inicio de sesión
        login(userData);
    };

    function disabledHandle() {
        for (let error in errors) {
            if (errors[error] !== "") return true;
        }
        return false;
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Email">Email: </label>
                <input
                    type="text"
                    name="email"
                    placeholder="Email.."
                    onChange={handleChange}
                    value={userData.email}
                />
                {errors.email && <p>{errors.email}</p>}
                <hr />

                <label htmlFor="password">Password: </label>
                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña.."
                    onChange={handleChange}
                    value={userData.password}
                />
                {errors.password && <p>{errors.password}</p>}
                <br />
                <button disabled={disabledHandle()} type="submit">Aceptar</button>
            </form>
        </div>
    );
}

export default Login;
