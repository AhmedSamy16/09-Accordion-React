import Question from "./Question";
import data from "./data"

function App() {
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {
            data.map((q) => {
              return <Question key={q.id} {...q} />
            })
          }
        </section>
      </div>
    </main>
  );
}

export default App;
