import { useState } from "react";
import { Link } from "react-router-dom";
import { Book } from "../components/Book";
import { Layout } from "../components/Layout";
import { useAppContext } from "../store/Store";
import '../style.css'

export const Index = () => {
  const store = useAppContext();
  return (
    <Layout>
      <div className="containerIndex">
        {store.items.map((el) => (
          <Book item={el} key={el.id} />
        ))}
      </div>
    </Layout>
  );
};
