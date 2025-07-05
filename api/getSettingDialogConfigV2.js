exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'X-D-I': 'tRY84woR9jliRWefUICkUxZv5j3o12MOHnS0nAp7XQs',
      'X-W-I': 'ChHsh9+LpfWCCRto9E3133NZUM7PgI1TJvsl1dsA9LU=',
      'X-C-M': 'XTeuJEeiVe5160gIP5GHYA=='
    },
    body: JSON.stringify({
      code: 0,
      data: "getSettingDialogConfigV2",
      message: null
    })
  };
};
