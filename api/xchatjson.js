const { Buffer } = require('buffer');
exports.handler = async (event, context) => {
  const method = event.httpMethod;
  const body = JSON.parse(event.body || '{}');

  let responseData;
  let headers = {
    'Content-Type': 'application/json'
  };

  if (method === 'POST') {
    responseData = body; // 直接返回你指定的 JSON 对象
  } else if (method === 'GET') {
    responseData = { code: 0, data: 'GET 方法不支持' };
  } else {
    return {
      statusCode: 405,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: 1, message: 'Method Not Allowed' })
    };
  }

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(responseData)
  };
};