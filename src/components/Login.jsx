import { useState } from 'react'

export function Login({ onLoginSuccess }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const token = 'eyaisjdoiasjdiosajd.oiasjdoasjd'

        localStorage.setItem('token', token)
        localStorage.setItem('email', email)
        onLoginSuccess(token)
    }

    return (
        <div className="container flex-grow-1 d-flex align-items-center justify-content-center py-5">
            <div className="card shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
                <div className="card-body p-4">
                    <form onSubmit={handleSubmit}>
                        <h3 className="mb-4 text-center">Inicio de Sesión</h3>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Correo Electrónico:</label>
                            <input
                                id="email"
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="form-label">Contraseña:</label>
                            <input
                                id="password"
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-100">Ingresar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
