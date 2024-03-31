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

export default get