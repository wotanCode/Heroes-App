import { useForm } from "../../hooks/useForm";

export const SearchScreen = () => {

  const [formValues, handleInputChange] = useForm({
    searchText: '',
  })

  const { searchText } = formValues;

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText)

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

      </div>
    </>
  )
}