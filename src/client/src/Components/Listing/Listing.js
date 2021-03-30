import axios from "axios";
import React, { useState } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import useRequest from "./AxiosHelper";

import AuthService from "../../Hooks/auth.service";

function Listing() {
  const currentUser = AuthService.getCurrentUser();
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [year, setYear] = useState("");
  const [describe, setDescribe] = useState("");
  const [channel, setChannel] = useState("");
  const [baseURL, setBaseURL] = useState("");

  const API_URL = "/market/test";

  //
  //
  // AddListing Market - New
  //
  //

  const addListing = (e) => {
    e.preventDefault();
    //console.log(currentUser);
    const data = {
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
      });
  };

  //console.log(res);

  //await doRequest(); // wait then execute the line below - router

  return (
    <div className="market">
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
        <button>
          <span>
            <a href="/">Home</a>
          </span>
        </button>
      </Form>
    </div>
  );
}

export default Listing;
