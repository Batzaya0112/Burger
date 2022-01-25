
import css from './style.module.css';
import Toolbar from '../../components/Toolbar';
import BurgerBuilder from '../BurgerBuilder';
function App() {
  return (
    <div>
      <Toolbar />
      <main className={css.Content}>
        <BurgerBuilder />
      </main>

    </div>
  );
}

export default App;
