import { dblClick } from "@testing-library/user-event/dist/click";
import axios from "axios";
// Use json server :
//             1. change directory src/Data .
//             2. start server: json-server --watch db.json --port 3001
export const fetchArticleDetails = async () => {
    
  const response = await axios.get(
    "http://localhost:3001/data"
  );
  return response.data;
};

export const fetchProgressDetails = async ()=>{
  const response = await axios.get(
    'http://localhost:3002/progressData'
  );
return response.data;
}
