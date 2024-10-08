import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Minha Aplicação</Link>
        <div>
          <Link href="/login" className="mr-4">Login</Link>
          <Link href="/protegido">Página Protegida</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
