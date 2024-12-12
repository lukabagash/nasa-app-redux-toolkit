import NavBar from "../components/NavBar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleSubmit, fetchPhoto } from "../redux/slices/photoSlice";
import {PhotoDataProps, PhotoProps, PhotoPropsRandom, StateProps } from '../redux/slices/photoSlice';
import store from "../redux/store";

const Photo: React.FunctionComponent = () => {
  const { photoData, dateOfPhotoSubmit } = useSelector(
    (state: StateProps) => state.photo
  );
  const dispatch = useDispatch<typeof store.dispatch>();
  const [dateOfDay, handleChangeDay] = useState(`01`);
  const [dateOfMonth, handleChangeMonth] = useState(`02`);
  const [dateOfYear, handleChangeYear] = useState(`2016`);

  const getNewPhoto = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(handleSubmit(`${dateOfYear}-${dateOfMonth}-${dateOfDay}`));
  };

  useEffect(() => {
    dispatch(fetchPhoto(dateOfPhotoSubmit));
  }, [dateOfPhotoSubmit]);

  if (!photoData) return <div />;

  return (
    <div className="nasa-photo">
      <NavBar />
      <div className="nasa-photo__card">
        <div className="nasa-photo__image">
          {photoData.media_type === "image" ? (
            <img src={photoData.url} alt={photoData.title} />
          ) : (
            <iframe
              title="space-video"
              src={photoData.url}
              frameBorder="0"
              //gesture="media"
              allow="encrypted-media"
              allowFullScreen
              className="photo"
            />
          )}
        </div>
        <div className="nasa-photo__pin">
          <h1 className="pin__title">{photoData.title}</h1>
          <p className="pin__date">{photoData.date}</p>
          <p className="pin__description">{photoData.explanation}</p>
          <form
            onSubmit={(e: React.FormEvent<HTMLFormElement> ) => getNewPhoto(e)}
            className="nasa-photo__choise-from"
          >
            <div className="pin__input">
              <label htmlFor="day">Day</label>
              <input
                id="day"
                type="number"
                max="31"
                min="1"
                value={dateOfDay}
                onChange={(e) => handleChangeDay(e.target.value)}
              />
            </div>
            <div className="pin__input">
              <label htmlFor="month">Month</label>
              <input
                id="month"
                type="number"
                max="12"
                min="1"
                value={dateOfMonth}
                onChange={(e) => handleChangeMonth(e.target.value)}
              />
            </div>
            <div className="pin__input">
              <label htmlFor="year">Year</label>
              <input
                id="year"
                type="number"
                min="1980"
                max="2021"
                value={dateOfYear}
                onChange={(e) => handleChangeYear(e.target.value)}
              />
            </div>
            <input className="pin__submit" type="submit" value="Get new post" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Photo;
