import "./App.scss";

function App() {
  return (
    <div className="card-container">
      <section className="img-card-section">
        <div className="img-card-square"></div>
        <img
          className="img-card-style"
          src="https://images.pexels.com/photos/10019263/pexels-photo-10019263.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="background"
        />
      </section>
      <section className="name-card-section">Grumpy Cat</section>
      <section className="title-card-section">Fullstack Developer</section>
      <section className="desc-card-section">
        Grumpy Cat is a cat that is Grumpy and is a cat. Also he's a developer.
      </section>
    </div>
  );
}

export default App;
