import React from "react";

function Card() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/dados")
      .then((res) => res.json())
      .then((data) => setData(data.estado));
  }, []);


  return (
    <>
      <div>
        <div className="justify-content-center input-group mt-5 mb-5">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">Bairro</label>
          </div>
          <select className="custom-select" id="inputGroupSelect01">
            <option selected>Escolher...</option>
            <option value="1">{!data ? "Flamengo/RJ" : data}</option>
            <option value="2">{!data ? "Flamengo/RJ" : data}</option>
            <option value="3">{!data ? "Flamengo/RJ" : data}</option>
            <option value="4">{!data ? "Flamengo/RJ" : data}</option>
          </select>
        </div>

        <div className='container'>
          <div className="row">
            <div className="col-sm">
              <div id='card' className="card text-white bg-success mb-3">
                <div className="text-center card-header">18/12 - 13h</div>
                <div className="card-body">
                  <h5 className="card-title">Sem Chuva</h5>
                  <p className="card-text">Dia sem chuva aproveite o sol e curta seu dia.</p>
                </div>
              </div>
            </div>

            <div className="col-sm">
              <div id='card' className="card text-white bg-primary mb-3">
                <div className="text-center card-header">18/12 - 14h</div>
                <div className="card-body">
                  <h5 className="card-title">Chuva Fraca</h5>
                  <p className="card-text">Dia com pouca chuva cuidado ao sair.</p>
                </div>
              </div>
            </div>

            <div className="col-sm">
              <div id='card' className="card text-white bg-warning mb-3">
                <div className="text-center card-header">18/12 - 15h</div>
                <div className="card-body">
                  <h5 className="card-title">Chuva Moderada</h5>
                  <p className="card-text">Dia com chuva fique em casa e aproveite a família.</p>
                </div>
              </div>
            </div>

            <div className="col-sm">
              <div id='card' className="card text-white bg-danger mb-3">
                <div className="text-center card-header">18/12 - 16h</div>
                <div className="card-body">
                  <h5 className="card-title">Chuva Forte</h5>
                  <p className="card-text">Dia chuvoso fique atendo as enchentes e alagamentos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Card;
