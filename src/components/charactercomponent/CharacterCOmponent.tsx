import { useState } from "react";
//import "./CharacterComponent.scss";
import hart from "./hartje.jpg";
import "../../App.scss";
import { ICharacter } from "../../types/IndexTypes";

// export const CharacterComponent = (results: ICharacter) => {
//   const { id, image, name, status, species, gender } = results;
//   return (
//     //<div className="character-component">
//     <div className="container__main">
//       <article className="character-detail article1">
//         <h3 className="character-detail__header">{name}</h3>
//         <figure className="character-detail__figure">
//           <img src={image} alt="" className="character-detail__figure__img" />
//           {/* <figcaption className="character-detail__text">
//               wat is beter article 1 of article 2 (semantisch?)
//             </figcaption> */}
//         </figure>
//         <article>
//           <ul>
//             <li className="character-detail__eigenschap">Itemnr: {id}</li>
//             <li className="character-detail__eigenschap">Naam: {name}</li>
//             <li className="character-detail__eigenschap">Species: {species}</li>
//             <li className="character-detail__eigenschap">Status: {status}</li>
//             <li className="character-detail__eigenschap">Gender: {gender}</li>
//           </ul>
//         </article>

//         <div className="character-detail__footer">
//           <img src={hart} alt="" className="character-detail__footer__img" />
//           <span className="character-detail__footer__kopen">
//             {" "}
//             <span className="character-detail__footer__kopen__plus">
//               +
//             </span>{" "}
//           </span>
//         </div>
//       </article>
//     </div>
//     //</div>
//   );
// };

const CharacterComponent = (results: ICharacter) => {
  const { id, image, name, status, species, gender } = results;
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div className="border">
      <article className="character" key={id}>
        <h3 className="character__header">{name}</h3>

        <img
          src={image}
          alt={`drawing of ${name}`}
          className="character__img"
          width="250"
          height="200"
        />

        <article className="character-detail">
          <ul>
            <li className="character-detail__eigenschap hover">
              Species: {species}
            </li>
            <li
              className="character-detail__eigenschap hover"
              style={{
                height: "10px",
                width: "100px",
                backgroundColor: hover ? "yellow" : "none",
                color: hover ? "red" : "black"
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Status: {status}
            </li>
            <li className="character-detail__eigenschap hover">
              Gender: {gender}
            </li>
          </ul>
        </article>

        <div className="character__footer">
          <img src={hart} alt="" className="character__footer__img" />
          {/* <span className="character__footer__kopen">
          {" "}
          <span className="character__footer__kopen__plus">+</span>
        </span> */}
        </div>
      </article>
    </div>
  );
};

export default CharacterComponent;
