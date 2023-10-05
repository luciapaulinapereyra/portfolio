// pages/index.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Bienvenido a mi portfolio</h1>
        {/* Aquí puedes agregar información sobre ti */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
