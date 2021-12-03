const SendResponse = (status, message, data) => {
  if (data) {
    return {
      status,
      message,
      data: data || [],
    };
  } else {
    return {
      status,
      message,
    };
  }
};

module.exports = SendResponse;
