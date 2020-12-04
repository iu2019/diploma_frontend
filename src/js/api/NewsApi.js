import { SERV_DEV_ADDR, SERV_PROD_ADDR } from '../constants/Constants';

export class NewsApi {
    constructor () {
        this.apiKey = ada456ebddc14fd8b8bc0a460994075b;
        this.serverUrl = process.env.NODE_ENV === 'development' ? 
            SERV_DEV_ADDR : 
            SERV_PROD_ADDR;

    }

    getInfo (keyword) {

        return fetch(`${this.serverUrl}q=${keyword}`, {

        method: 'GET',

        headers: {

            'Authorization': this.apiKey

            }
        })
        .then(res => {
            if (!res.ok) {
              return Promise.reject(res.status);
            } else {
              return res.json();
            }
          })
      }

    getNews () {

    }
}