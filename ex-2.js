//Exercise #2
let getJohnProfile = () => {
  return new Promise(function (resolve, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};

// Start coding here
function handleData(getJohnProfile) {
  console.log(getJohnProfile);
}
getJohnProfile().then(handleData).catch(handleData);