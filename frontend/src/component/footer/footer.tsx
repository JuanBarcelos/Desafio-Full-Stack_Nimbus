function Footer() {
  return (
    <footer className="footer mt-auto py-3">
      <div className="container">
        <h6>Legenda:</h6>
        <p>
          <span className="text-success">Sem Chuva: </span> - menor que 0.2mm;<br></br>
          <span className="text-primary">Chuva Fraca: </span> - 0.2 a 5.0mm;<br></br>
          <span className="text-warning">Chuva Moderada: </span> - 5.1 a 25.0mm;<br></br>
          <span className="text-danger">Chuva Forte: </span> - maior que 25.0mm;
        </p>
      </div>
    </footer>
  );
}

export default Footer;
