import { useForm } from "../../hooks/useForm";
import { getHeroByName } from "../../selectors/getHeroByName";
import { HeroCard } from "../hero/HeroCard";

export const SearchScreen = () => {

  const [formValues, handleInputChange] = useForm({
    searchText: '',
  })

  const { searchText } = formValues;

  const heroesFileted = getHeroByName('');

  const handleSearch = (e) => {
    e.preventDefault();

  }

  return (
    <>
      <h1>Busqueda</h1>
      <hr />

      <div className="row">

        <div className="col-5">
          <h4>Buscar</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              className="form-control"
              placeholder="Buscar"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />

            <button
              type="submit"
              className="btn btn-outline-primary mt-1"
            >
              Buscar
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Resultado</h4>
          <hr />

          {
            heroesFileted.map(hero => (
              <HeroCard
                key={hero.id}
                {...hero}
              />
            ))
          }
        </div>

      </div>
    </>
  )
}