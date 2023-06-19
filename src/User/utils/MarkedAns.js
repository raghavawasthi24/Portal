const MarkedAns = ({ quesId, ansId, reviewFlag }) => {
  axios
    .post(`link`, {
      quesId,
      ansId,
      reviewFlag,
    })
    .then((e) => {
      console.log("sent");
      console.log(e.data);
    })
    .catch((err) => console.log(err));
};

export { MarkedAns };
