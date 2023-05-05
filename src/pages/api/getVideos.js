export default async function handler(req, res) {
  const { playlistId } = req.query;
  let apiUrl;
  if (playlistId.startsWith("PLA")) {
    apiUrl = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=10&key=${process.env.YOUTUBE_API_KEY}`;
  } else {
    apiUrl = process.env.NEXT_PUBLIC_YOUTUBEURL;
  }
  const response = await fetch(apiUrl);
  const data = await response.json();
  res.status(200).json(data);
}
