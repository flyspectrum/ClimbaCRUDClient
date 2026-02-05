import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Lista from './app/lista';
import Toolbar from './app/toolbar';
import Cadastro from './app/cadastro';

function App() {

  return (
    <>
      <nav>
        <Link to="/lista">Teste</Link> |{" "}
        <Link to="/cadastro">Cadastro</Link> |{" "}
        <Link to="/cadastro/1">CadastroID</Link> |{" "}
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/">
          <Route index element={<Toolbar />} />
          <Route>
            <Route path="lista" element={<Lista />} />
            <Route path="cadastro" element={<Cadastro></Cadastro>} />
            <Route path="cadastro/:clienteId" element={<Cadastro></Cadastro>} />
          </Route>

        </Route>
      </Routes >

    </>
  )
}

export default App