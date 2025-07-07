const https = require("https");

exports.handler = async () => {
  const imageUrl = "https://wchats.netlify.app/mask.jpg"; // 图片放在 public 下，对外可访问

  return new Promise((resolve, reject) => {
    https.get(imageUrl, (res) => {
      let data = [];

      res.on("data", (chunk) => data.push(chunk));
      res.on("end", () => {
        const imageBuffer = Buffer.concat(data);

        resolve({
          statusCode: 200,
          headers: {
            "Content-Disposition": "inline; filename=mask.jpg",
            "Content-Type": "image/jpeg",
            "Content-Length": imageBuffer.length.toString(),
            "Cache-Control": "no-cache",
            "Vary": "Accept-Encoding",
            "Server": "Werkzeug/2.0.3 Python/3.6.8"
          },
          body: imageBuffer.toString("base64"),
          isBase64Encoded: true,
        });
      });
    }).on("error", (err) => {
      reject({
        statusCode: 500,
        body: `Error fetching image: ${err.message}`,
      });
    });
  });
};
