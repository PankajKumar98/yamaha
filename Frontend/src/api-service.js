// const TOKEN="7f85ca6ec388fa645c66b0ea4d9892fdf7bb1307";
// import { Alert } from 'react-alert';
export class API{
  static createForm(body){
    try{
    return fetch(`http://127.0.0.1:8000/Second/bikeform/`,{
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
        'Authorization':'TOKEN 7f85ca6ec388fa645c66b0ea4d9892fdf7bb1307'
      },
      body:body
    }).then(res => res.json())
    .then(res => JSON.stringify(res))
    }
    catch(error){
      console.log(error);
    }
  }
}
