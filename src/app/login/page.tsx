"use client"; // Marca o componente como Client Component

import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();

  const handleLogin = () => {
    // Simula a autenticação e armazena o estado no localStorage
    localStorage.setItem('authenticated', 'true'); // Armazena o estado de autenticação
    router.push('/protegido'); // Redireciona para a página protegida
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login Simulado</h1>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Fazer Login
        </button>
      </div>
    </div>
  );
};

export default Login;
