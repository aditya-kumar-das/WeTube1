import axios from 'axios'
console.log(process.env.REACT_APP_YT_API_KEY)
const request = axios.create({
   baseURL: 'https://youtube.googleapis.com/youtube/v3/',
   params: {
      key: 'AIzaSyCF0zHtj_zAujOQCuDID2Ah2soAXm3EpY8',
   },
})

export default request
