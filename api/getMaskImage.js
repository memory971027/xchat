const fs = require("fs");
const path = require("path");

exports.handler = async () => {
  const imagePath = path.resolve(__dirname, "../public/mask.jpg");
  const imageBuffer = fs.readFileSync(imagePath);

  return {
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
  };
};
