import { useState } from "react";
import { FormUser } from "../FormUser/FormUser";
import { Header } from "../Header/Header";
import { SongImage } from "../SongImage/SongImage";

export const MainPage = () => {
  const initialValue = {
    title: "",
    author: "",
  };

  const [inputValue, setInputValue] = useState(initialValue);
  const [songImage, setSongImage] = useState("");

  const handleChange = (evt) => {
    setInputValue({
      ...inputValue,
      [evt.target.id]: evt.target.value,
    });
  };

  const fetchApi = async (inputValue) => {
    const { author, title } = inputValue;
    const url = `https://itunes.apple.com/search?term=${title}+${author}`;
    const response = await fetch(url);
    const { results } = await response.json();
    const data = results[0];
    const { artworkUrl100 } = data;
    console.log(artworkUrl100);
    setSongImage(artworkUrl100);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    fetchApi(inputValue);
    setInputValue(initialValue);
  };
  return (
    <div>
      {" "}
      <Header />
      <FormUser
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        inputValue={inputValue}
      />
      {songImage !== "" && <SongImage songImage={songImage} />}
    </div>
  );
};
