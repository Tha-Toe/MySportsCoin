import React, { useEffect } from "react";
import "./data.css";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../firebase";
import { useState } from "react";
import LoadingSpinner from "../LoadingSpinner";
export default function Data() {
  const [dataFromFirebase, setDataFromFirebase] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setShowSpinner(true);
      const q = query(collection(db, "data"));
      onSnapshot(q, (querySnapshot) => {
        const cities = [];
        querySnapshot.forEach((doc) => {
          cities.push(doc.data());
        });
        setDataFromFirebase(cities);
        setShowSpinner(false);
      });
    };
    getData();
  }, []);
  return (
    <div className="data_container">
      <div className="data_header">Data</div>
      {showSpinner ? (
        <LoadingSpinner />
      ) : (
        <div className="data_child">
          {dataFromFirebase.map((e, index) => (
            <div className="data_each_container" key={index}>
              <div>{index + 1}.</div>
              <div className="each_data">First Name: {e.firstName}</div>
              <div className="each_data">Second Name: {e.secondName}</div>
              <div className="each_data">Email: {e.email}</div>
              <div className="each_data"> phone number: {e.phoneNumber}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
