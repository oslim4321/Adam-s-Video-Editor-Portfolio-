export default async function handler(req, res) {
  const { playlistId } = req.query;
  const response = await fetch(process.env.youtubeurl);
  const data = await response.json();
  res.status(200).json(data);
}
