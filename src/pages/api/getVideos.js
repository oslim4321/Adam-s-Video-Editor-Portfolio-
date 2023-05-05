export default async function handler(req, res) {
  console.log(req.query);
  const { playlistId } = req.query;
  console.log(playlistId);
  const apiUrl = playlistId
    ? `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=10&key${process.env.YOUTUBE_API_KEY}`
    : process.env.youtubeurl;
  const response = await fetch(apiUrl);
  const data = await response.json();
  res.status(200).json(data);
}
