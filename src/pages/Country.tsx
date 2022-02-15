import React, { useEffect, useRef, useState } from "react";
import "../styles/Country.css";
import Header from "../components/Header";
import CountryItem from "../components/CountryItem";
import axios from "axios";
import { apiUrl } from "../api";

const Country: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const timer: { current: NodeJS.Timeout | null } = useRef(null);

  const getCountry = async (key: string): Promise<any> => {
    const res = await axios.get(`${apiUrl}/${key}`);
    if (res.status === 200) {
      setIsLoading(false);
      setData(res.data);
    }
    return res.data;
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let { value } = event.target;
    setIsLoading(true);
    clearTimeout(timer.current as NodeJS.Timeout);
    timer.current = setTimeout(() => {
      value && value !== "" && getCountry(value);
    }, 500);
    if (value === "") {
      setIsLoading(false);
    }
  };

  const showBody = () => {
    let body;
    if (!isLoading) {
      body =
        data &&
        data.map((country: any, index: number) => {
          return <CountryItem key={index} name={country.name.common} />;
        });
    } else {
      body = (
        <div className="loading">
          <img
            id="loading"
            src="http://rpg.drivethrustuff.com/shared_images/ajax-loader.gif"
          />
        </div>
      );
    }
    return body;
  };
  return (
    <div>
      <Header title="Country list" button />
      <div className="country-container">
        <div className="search-country">
          <input
            className="search-country__input"
            type="text"
            placeholder="Search"
            onChange={onChange}
          />
          <div className="search-country__btn">
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </div>
        {showBody()}
      </div>
    </div>
  );
};

export default Country;
