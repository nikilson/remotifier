import { View, Text } from 'react-native'
import React from 'react'

async function get(baseUrl, endpoint, param){
    try {
      const response = await fetch(
        baseUrl + endpoint
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };

  async function post(baseUrlParam, endpoint, param={}, body_param={}){

    // Headers
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    let paramEndpoint = ''

    // Parameters
    for (let key in param){
      paramEndpoint += `?${key}=${param[key]}`
    }

    // Body

    const raw = JSON.stringify(body_param);

    let url = baseUrlParam + endpoint + paramEndpoint;
    const requestOptions = {
      method: "POST",
      redirect: "follow",
      headers: myHeaders,
      body: raw,
    };

    try {
      const response = await fetch(
          url, 
          requestOptions,
        );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };

export {get, post}