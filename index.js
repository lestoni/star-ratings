module.exports = function calculate(voters) {
  let total_per_rate = 0;
  let total_voters = 0;


  for(let i = 1; i <= voters.length; i++) {
    total_per_rate += (i * voters[i - 1]);
    total_voters += voters[i - 1];
  }


  return (total_per_rate / total_voters).toPrecision(2);
};
