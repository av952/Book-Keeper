import { Book } from "../components/Book";
import { Layout } from "../components/Layout";
import { useAppContext } from "../store/Store";
import '../style.css'

export const Index = () => {
  const store = useAppContext();

  console.log(store.items.length);  
  return (
    <Layout>
      {
        store.items.length >1
        ?
      <div className="containerIndex">
        {store.items.map((el) => (
          <Book item={el} key={el.id} />
        ))}
      </div>
      :
      <h1 className="msg">No hay datos aún, crea nuevos datos desde la pestaña de <strong> create </strong> </h1>
      }
    </Layout>
  );
};
