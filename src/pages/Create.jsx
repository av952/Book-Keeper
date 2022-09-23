import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { useAppContext } from "../store/Store";
import "../style.css";

export const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [intro, setIntro] = useState("");
  const [completed, setCompleted] = useState(false);
  const [review, setReview] = useState("");

  const store = useAppContext();
  const navigate = useNavigate();

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "author":
        setAuthor(value);
        break;
      case "intro":
        setIntro(value);
        break;
      case "completed":
        setCompleted(e.target.checked);
        break;
      case "review":
        setReview(value);
        break;
      default:
    }
  }

  function handleChangeFile(e) {
    const element = e.target;
    const file = element.files[0];
    //manipular archivos directamente desde el navegador
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function () {
      setCover(reader.result.toString());
    };
  }
  function hanldeSubmit(e) {
    e.preventDefault();

    const newBook = {
      id: crypto.randomUUID(),
      title,
      author,
      cover,
      intro,
      completed,
      review,
    };
    //TODO: para mandar a crear  o registrar el libro
    store.createItem(newBook);
    navigate("/book-keeper");
  }

  return (
    <Layout>
      <form className="containerForm" onSubmit={hanldeSubmit}>
        <div>
          <h3>Title</h3>
          <input
          required={true}
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </div>
        <div>
          <h3>author</h3>
          <input
          required={true}
            type="text"
            name="author"
            value={author}
            onChange={handleChange}
          />
        </div>
        <div>
          <h3>cover</h3>
          <input
          required={true} type="file" name="cover" onChange={handleChangeFile} />
        </div>
        <div>
          {!!cover ? (
            <img
              className="imgForm"
              src={cover}
              width={"200"}
              alt="img cover"
            ></img>
          ) : (
            ""
          )}
        </div>

        <div>
          <h3>Introduction</h3>
          <textarea 
          required={true}
          name="intro" 
          value={intro}
          onChange={handleChange}/>
          {/* <input
            type="text"
            name="intro"
            value={intro}
            onChange={handleChange}
          /> */}
        </div>

        <div className="completeForm">
          <h3>Completed</h3>
          <input
            type="checkbox"
            name="completed"
            value={completed}
            onChange={handleChange}
          />
        </div>
        <div>
          <h3>Review</h3>
          <textarea 
          required={true}
          name="review" 
          value={review} 
          onChange={handleChange} />
          {/* <input
            type="text"
            name="review"
            value={review}
            onChange={handleChange}
          /> */}
        </div>
        <input className="btnForm" type="submit" value="register book" />
      </form>
    </Layout>
  );
};
