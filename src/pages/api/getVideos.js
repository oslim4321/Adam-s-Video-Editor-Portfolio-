export default async function handler(req, res) {
  console.log(req.query);
  const { playlistId } = req.query;
  console.log(playlistId);
  let apiUrl;
  if (playlistId.startsWith("PLA")) {
    console.log("i am running");
    apiUrl = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=10&key=PLAmG0Hd23HiJ3YeDhx5Yqdt--r998WcTO`;
  } else {
    apiUrl = process.env.NEXT_PUBLIC_YOUTUBEURL;
  }
  const response = await fetch(apiUrl);
  const data = await response.json();
  res.status(200).json(data);
}
