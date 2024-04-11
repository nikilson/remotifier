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

  async function post(baseUrl, endpoint, param){
    let paramEndpoint = ''
    for (let key in param){
      paramEndpoint += `?${key}=${param[key]}`
    }
    let url = baseUrl + endpoint + paramEndpoint;
    const requestOptions = {
      method: "POST",
      redirect: "follow"
    };
    try {
      const response = await fetch(
          url, 
          requestOptions
        );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };

export {get, post}