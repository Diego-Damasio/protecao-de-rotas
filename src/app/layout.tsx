import './globals.css'; // Certifique-se de que seu CSS global está incluído

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
};

export default Layout;
