export const sendResponse = (response, status, data) => {
  response.statusCode = status;
  response.setHeader('Content-Type', 'application/json');
  response.write(JSON.stringify(data));
  response.end();
};
