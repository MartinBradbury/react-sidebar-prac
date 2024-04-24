import css from './App.module.css';
import Sidebar from './components/Sidebar';
import NavbarSimple from './components/NavbarSimple';
import NavbarForm from './components/NavbarForm';
import NavigationParent from './components/NavigationParent';



function App() {
  return (
    <div className={css.App}>
      <Sidebar />
      {/* <NavbarSimple /> */}
      <NavbarForm />
      {/* <NavigationParent /> */}
      
    </div>
  );
}

export default App;