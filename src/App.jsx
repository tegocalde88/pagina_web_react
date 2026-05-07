import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div style={styles.app}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100%',
  }
};

export default App;