//Import to make react work.
import React, { useState, useEffect } from "react";
//Import to add style
import "./Display.scss";
//Import to fetch data from API.
import axios from "axios";
//Import to read the Id that the axios call will utilize to call the API.
import { useParams } from "react-router-dom";
//Import for Redux u  tilization.
import { useDispatch, useSelector } from "react-redux";
import { Fullproducts } from "../../Types/Fullproducts";
import productsState, {
  updateProducts,
  clearProducts,
} from "./../../reducers/fullproductsState";
import gamesState, {
  updateGames,
  clearGames,
} from "./../../reducers/fullgamesState";
import store, { RootState } from "../../ReduxStore";

const Display = () => {
  const [data, setData] = useState<any[]>([]);
  const [datadue, setDatadue] = useState<any[]>([]);
  const [errore, setErrore] = useState<Boolean>(false);
  const { id } = useParams();
  const [loading, setLoading] = useState<Boolean>(true);
  const dispatch = useDispatch();
  const [word, setWord] = useState("");
  let adress: string =
    "https://www.atg.se/services/racinginfo/v1/api/products/" + id;
  let adressGames: string =
    "https://www.atg.se/services/racinginfo/v1/api/games/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get(adress);
        const id = response1.data.results[0].id;
        dispatch(updateProducts(response1.data));
        setWord(response1.data.results[0].id);
        setData(response1.data);
        console.log(word);
        console.log(response1);
        const response2 = await axios.get(adressGames + id);
        setDatadue(response2.data);
        console.log(response2);
        dispatch(updateGames(response2.data));
        setLoading(false);
      } catch (error) {
        console.error(error);
        setErrore(true);
      }
    };
    fetchData();
  }, []);

  const products: any = useSelector((state: RootState) => state.data);
  const games: any = useSelector((state: RootState) => state.datadue);

  if (loading) {
    return (
      <div className="page-display">
        <div className="content">
          <h1>Loading</h1>
        </div>
      </div>
    );
  } else {
    return (
      <div className="page-display">
        <div className="content">
          <div className="content-title">
            <div className="ct-1">
              <h1>Serie</h1>
              <h1>{products.betType}</h1>
            </div>
            <div className="ct-2">
              <h1>{products.results[0].tracks[0].name} </h1>
            </div>
            <div className="ct-4">
              <h1>{products.results[0].startTime.substr(0, 10)}</h1>
            </div>
            <div className="ct-5">
              <h1>{products.results[0].startTime.substr(-8)}</h1>
            </div>
          </div>
        </div>
        <div className="content-table">
          <table>
            <thead>
              <tr>
                <th style={{ width: "5%" }}>Race Number</th>
                <th style={{ width: "10%" }}>Race Name</th>
                <th style={{ width: "5%" }}>Race Start Time</th>
                <th className="special" style={{ width: "20%" }}>
                  Horses
                </th>
                <th className="special" style={{ width: "20%" }}>
                  Driver
                </th>
                <th className="special" style={{ width: "20%" }}>
                  Horse Trainer
                </th>
                <th className="special" style={{ width: "20%" }}>
                  Horse Father
                </th>
              </tr>
            </thead>
            <tbody>
              {games.races.map((race: any) => (
                <tr key={race.number}>
                  <td>{race.number}</td>
                  <td>{race.name}</td>
                  <td>{race.startTime.substr(-8)}</td>
                  <td>
                    <ul>
                      {race.starts.map((start: any, index: number) => (
                        <ul key={index}>
                          {index + 1} {start.horse.name}
                        </ul>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <ul>
                      {race.starts.map((start: any, index: number) => (
                        <ul key={index}>
                          {index + 1}{" "}
                          {start.driver.firstName + "." + start.driver.lastName}
                        </ul>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <ul>
                      {race.starts.map((start: any, index: number) => (
                        <ul key={index}>
                          {index + 1}{" "}
                          {start.horse.trainer.firstName +
                            "." +
                            start.horse.trainer.lastName}
                        </ul>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <ul>
                      {race.starts.map((start: any, index: number) => (
                        <ul key={index}>
                          {index + 1} {start.horse.pedigree.father.name}
                        </ul>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="content-bottom">
          <a className="InitialP" href="/">
            HOME.
          </a>
        </div>
      </div>
    );
  }
};

export default Display;
