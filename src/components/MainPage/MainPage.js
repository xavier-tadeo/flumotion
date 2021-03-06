import { useState } from "react";
import { FormUser } from "../FormUser/FormUser";
import { Header } from "../Header/Header";
import { SongImage } from "../SongImage/SongImage";

export const MainPage = () => {
  const [songImage, setSongImage] = useState("");
  const [isDisable, setIsDisable] = useState(true);

  const initialValue = {
    title: "",
    author: "",
  };

  const [inputValue, setInputValue] = useState(initialValue);

  const fetchApi = async (inputValue) => {
    const { author, title } = inputValue;
    const url = `https://itunes.apple.com/search?term=${title}+${author}`;
    const response = await fetch(url);
    const { results } = await response.json();
    const artistName = results.filter(
      (result) => result.artistName.toUpperCase() === author.toUpperCase()
    );
    const trackName = artistName.filter(
      (track) => track.trackName.toUpperCase() === title.toUpperCase()
    );
    const data = trackName[0];
    if (data) {
      const { artworkUrl100 } = data;
      setSongImage(artworkUrl100);
    } else {
      setSongImage(
        "https://cmsprod.diamondresorts.com/sites/default/files/image-not-found.jpg"
      );
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    fetchApi(inputValue);
    setInputValue(initialValue);
    setIsDisable(true);
  };
  return (
    <div>
      {" "}
      <Header />
      <FormUser
        handleSubmit={handleSubmit}
        setInputValue={setInputValue}
        inputValue={inputValue}
        isDisable={isDisable}
        setIsDisable={setIsDisable}
      />
      {songImage && <SongImage songImage={songImage} />}
    </div>
  );
};
