import css from './App.module.css';
import Sidebar from './components/Sidebar';
import NavbarSimple from './components/NavbarSimple';
import NavbarForm from './components/NavbarForm';



function App() {
  return (
    <div className={css.App}>
      <Sidebar />
      {/* <NavbarSimple /> */}
      <NavbarForm />
    </div>
  );
}

export default App;