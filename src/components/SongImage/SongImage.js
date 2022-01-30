import PropType from "prop-types";

export const SongImage = ({ songImage }) => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <img src={songImage} alt={songImage} width={200} height={200} />
    </div>
  );
};

SongImage.propType = {
  categorie: PropType.string.isRequired,
};
