import Header from '../components/Header';
import ExtensionList from '../components/ExtensionList';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <section className="ext-section">
        <ExtensionList />
      </section>
      <Footer />
    </main>
  );
}
