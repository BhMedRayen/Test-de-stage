import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container mt-5">
      {/* En-tête de la page */}
      <header className="text-center">
        <h1>Ma Page Web Bootstrap</h1>
      </header>

      {/* Contenu principal */}
      <div className="row mt-3">
        <div className="col-md-6">
          {/* Formulaire de connexion */}
          <form>
            <div className="form-group">
              <label htmlFor="username">Nom d'utilisateur :</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Entrez votre nom d'utilisateur"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mot de passe :</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Entrez votre mot de passe"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Se connecter
            </button>
          </form>
        </div>
        <div className="col-md-6">
          {/* Contenu supplémentaire */}
          <p>Bienvenue sur ma page web Bootstrap. Ceci est un exemple de mise en page simple.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
