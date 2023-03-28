import axios from "axios";

// Use json server :
//             1. change directory src/Data .
//             2. start server: json-server --watch API_1_Response.json --port 3001
//             3. start server: json-server --watch API_2_Response.json --port 3002


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
