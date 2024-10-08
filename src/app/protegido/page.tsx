"use client"; // Marca o componente como Client Component

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Protegido = () => {
  const router = useRouter();

  useEffect(() => {
    // Verifica se o usuário está autenticado
    const isAuthenticated = localStorage.getItem('authenticated') === 'true';

    if (!isAuthenticated) {
      router.push('/login'); // Redireciona para a página de login se não autenticado
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('authenticated'); // Remove o estado de autenticação
    router.push('/login'); // Redireciona para a página de login após logout
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Bem-vindo!</h1>
        <p className="text-gray-700 text-center">
          Esta é uma página protegida. Somente usuários autenticados podem ver este conteúdo.
        </p>
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
          >
            Sair
          </button>
        </div>
      </div>
    </div>
  );
};

export default Protegido;
