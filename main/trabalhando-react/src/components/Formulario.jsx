import {useState} from 'react'

const Formulario = () => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [idade, setIdade] = useState('')

    const [user, setUser] = useState(null) 

    const handleRegister = (e) => {
        e.preventDefault()
        
        // Verifica se todos os campos estão preenchidos antes de cadastrar
        if (nome && email && idade) {
            setUser({
                nome: nome,
                email: email,
                idade: idade
            })
            // Limpar formulário após o cadastro
                setNome('')
                setEmail('')
                setIdade('')
        } else {
             alert("Por favor, preencha todos os campos.");
        }
    }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        
        {/* Formulário de Cadastro */}
        <form 
            onSubmit={handleRegister} 
            className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md space-y-6"
        >

            <h1 className="text-3xl font-bold text-gray-800 text-center">Cadastro de Usuário</h1>

            {/* Campo Nome */}
            <div className="space-y-2">
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome:</label>
                <input 
                    id="nome"
                    type="text" 
                    value={nome} 
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                    placeholder="Seu nome completo"
                    required
                />
            </div>

            {/* Campo Email */}
            <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                <input 
                    id="email"
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                    placeholder="exemplo@dominio.com"
                    required
                />
            </div>

            {/* Campo Idade */}
            <div className="space-y-2">
                <label htmlFor="idade" className="block text-sm font-medium text-gray-700">Idade:</label>
                <input 
                    id="idade"
                    type="number" 
                    value={idade} 
                    onChange={(e) => setIdade(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                    placeholder="Sua idade"
                    min="1"
                    required
                />
            </div>

            {/* Botão de Envio */}
            <button 
                type='submit'
                className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 ease-in-out shadow-md hover:shadow-lg"
            >
                Cadastrar
            </button>
        </form>

        

        {/* Exibição do Usuário Cadastrado */}
        {user && (
            <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-lg w-full max-w-md shadow-md">
                <h2 className="text-xl font-semibold text-blue-800 mb-4">Dados Cadastrados com Sucesso! 🎉</h2>
                
                <div className="space-y-2 text-gray-700">
                    <p>
                        <strong className="font-medium">Bem-vindo(a),</strong> <span className="text-blue-600">{user.nome}</span>
                    </p>
                    <p>
                        <strong className="font-medium">Idade:</strong> {user.idade} anos
                    </p>
                    <p>
                        <strong className="font-medium">Email:</strong> {user.email}
                    </p>
                </div>
            </div>
        )}

        

        

    </div>
  )
}

export default Formulario