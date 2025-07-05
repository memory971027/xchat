exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'X-C-M': 'xEtAlWQlAeOYPC0jZ1Vc5g=='
    },
    body: JSON.stringify({
      code: 0,
      data: "getConfigV2",
      message: null
    })
  };
};
