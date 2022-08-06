import React, { useState } from "react";

export const Trip = ({
  name,
  title,
  qualification,
  opinions,
  price,
  discount = 0,
  description,
  image,
  travelers
}) => {
  const discountTag = discount ? <span> ( - {discount*100}% ) </span> : "";
  const [estado, setEstado] = useState(false);

  const handleClick = () => {
      setEstado(!estado)
  }
  return (
    <div className="c-trip">
      <div className="c-trip__image">
        <img src={image} alt={name} />
      </div>
      <div className="c-trip__info-container">

        <div className="c-trip__header-box">
          <div className="c-trip__title"> {title} </div>
        
        
          <button
            onClick={handleClick}
            className="c-trip__menubtn">
            Compartir
          </button> 
        
          {
            estado && <div className="c-trip__menu">
              <div>Facebook</div>
              <div>Twitter</div>
              <div>LinkedIn</div>
            </div>
          }

        </div>


        <div className="c-trip__score-box">
          <div className="c-trip__qualification"> {qualification} /10 </div>
          <div className="c-trip__opinion">{opinions} Opiniones</div>        
          <div className="c-trip__travelers">| {travelers} viajeros </div>
        </div>
        <div className="c-trip__description"> {description} </div>

        <div className="c-trip__price-box">
          {price ? (
            <div className="c-trip__price">
              {" "}
              {discountTag} {price}€{" "}
            </div>
          ) : (
            <div className="c-trip__price"> ¡Gratis! </div>
          )}
          
        </div>
      </div>
    </div>
  );
};
