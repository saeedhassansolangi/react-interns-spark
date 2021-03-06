import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Dashboard from './components/Dashboard';

export default function App() {
  return (
    <div className="App">
      <Dashboard />
      <footer>
        <p style={{ color: '#aaf2f5' }}>Created by saeedhassansolangi</p>
      </footer>
    </div>
  );
}
