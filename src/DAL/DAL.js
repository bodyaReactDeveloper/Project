import React from "react";
import * as axios from 'axios'

export const API = {
    getCurrency() {
        return axios.get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
    }
}