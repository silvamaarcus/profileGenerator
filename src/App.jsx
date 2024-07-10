// Hooks
import { useState, useEffect } from "react";

// Axios - Requisição
import axios from "axios";

// Componentes
import Profile from "./components/Profile";

function App() {
  const [profile, setProfile] = useState(null);

  const fetchProfile = async () => {
    try {
      const response = await axios.get(
        "https://random-data-api.com/api/v2/users?size=100"
      );
      const selectedProfile = response.data[0]; // Selecionando o perfil específico
      setProfile({
        firstName: selectedProfile.first_name,
        lastName: selectedProfile.last_name,
        job: selectedProfile.employment.title,
        state: selectedProfile.address.state,
        city: selectedProfile.address.city,
        avatar: selectedProfile.avatar,
      });
    } catch (error) {
      console.error("Erro ao obter usuário!!!", error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <>
      <section className="container">
        <div className="grid-2 disappear"></div>

        <div className="grid-8 flex-center-column">
          <h3>Gerador de Perfis</h3>
          <div className="flex-center-column mt-3">            
            <div>
              {profile && (
                <Profile
                  firstName={profile.firstName}
                  lastName={profile.lastName}
                  job={profile.job}
                  state={profile.state}
                  city={profile.city}
                  avatar={profile.avatar}
                />
              )}
            </div>

            <button onClick={fetchProfile} className="btn mt-3">
              Gerar Novo Perfil
            </button>
          </div>
        </div>

        <div className="grid-2 disappear"></div>
      </section>
    </>
  );
}

export default App;
