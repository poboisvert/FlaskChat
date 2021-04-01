import React, { useEffect, useState } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import UseRequest from "../../Hooks/axios-helper";
import "./Listing.css";
import Navigation from "../Navigation/Navigation";
import { useHistory } from "react-router-dom";
import axios from "axios";
import AuthService from "../../Hooks/auth-service";

const Listing = ({ id }) => {
  let history = useHistory();
  const currentUser = AuthService.getCurrentToken();
  console.log(currentUser);

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [year, setYear] = useState("");
  const [describe, setDescribe] = useState("");
  const [channel, setChannel] = useState("");
  const [baseURL, setBaseURL] = useState("");

  useEffect(() => {
    if (id) {
      axios
        .get(`/market/${id}`, {
          headers: {
            Authorization: "JWT " + currentUser, // Python BackOffice
          },
        })
        .then((res) => {
          // return  response;
          // console.log(res.data);
          let { title, channel, baseURL, year, describe, rating } = res.data;
          setTitle(title);
          setChannel(channel);
          setYear(year);
          setDescribe(describe);
          setBaseURL(baseURL);
          setRating(rating);
          // Forward to home page
          // this.props.history.push("/");
          // Refresh page
          //window.location.reload();
        })
        .catch((error) => {
          //return  error;
        });
    }
  }, [id]);

  //
  //
  // AddListing Market - New
  //
  //
  const { doRequest } = UseRequest({
    url: `/market/${title}`,
    method: "post",
    body: {
      title: title,
      rating: rating,
      year: year,
      describe: describe,
      baseURL: baseURL,
      channel: channel,
    },
    onSuccess: () => history.push("/"),
  });

  const addListing = async (e) => {
    e.preventDefault();
    await doRequest();
    //console.log(currentUser);
    /*     const data = {
      title: title,
      rating: 1,
      year: 2009,
      describe: "describe",
      baseURL: "dasdsa",
      channel: "sadsa",
    };

    axios
      .post(API_URL, JSON.stringify(data), {
        headers: {
          jwt_token: currentUser,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // return  response;
        console.log(response);
        // Forward to home page
        this.props.history.push("/");
        // Refresh page
        window.location.reload();
      })
      .catch((error) => {
        //return  error;
      }); */
  };

  //console.log(res);

  //await doRequest(); // wait then execute the line below - router

  return (
    <div className="listing">
      <div className="listing__container">
        {id ? <h4>Editing {id}</h4> : <h4>To insert a new market</h4>}
        <div className="listing__items">
          <Form onSubmit={addListing}>
            <Input
              type="text"
              placeholder="Title"
              className="form-control"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <Input
              type="text"
              placeholder="rating"
              className="form-control"
              name="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
            <Input
              type="text"
              placeholder="year"
              className="form-control"
              name="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />

            <Input
              type="text"
              placeholder="describe"
              className="form-control"
              name="describe"
              value={describe}
              onChange={(e) => setDescribe(e.target.value)}
            />
            <Input
              type="text"
              placeholder="channel"
              className="form-control"
              name="channel"
              value={channel}
              onChange={(e) => setChannel(e.target.value)}
            />
            <Input
              type="text"
              placeholder="baseURL"
              className="form-control"
              name="baseURL"
              value={baseURL}
              onChange={(e) => setBaseURL(e.target.value)}
            />

            <button className="sign-in">
              <span>Publish</span>
            </button>
          </Form>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Listing;
