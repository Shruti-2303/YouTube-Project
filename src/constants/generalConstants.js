const GOOGLE_API_KEY = "AIzaSyA5_uf6bx92viTbscSJEJjlk0f7DTSRcs8";

export const YOUTUBE_VIDOES_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
