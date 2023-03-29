import axios from "axios";

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
