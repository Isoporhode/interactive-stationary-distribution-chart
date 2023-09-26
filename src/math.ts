interface stationaryDistributionCalculationProps {
  s: number;
  y: number;
  l_given_y: number;
  n_l_given_n_y: number;
}

// s = 1
// l_given_y = 0.5
// y = 0.5
// n_l_given_n_y = 0.5
// n_l_given_y = 1.0 - l_given_y
// n_y = 1.0 - y

// huge_eq = (l_given_y * y) + (n_l_given_n_y*n_y)

// pi = [0,0,0,0,0,0,0,0,0]

// pi[0] = 0
// pi[1] = y ** 4 * l_given_y ** 0 * n_l_given_y**7 * s ** 0 * huge_eq ** 0
// pi[2] = y ** 3 * l_given_y ** 0 * n_l_given_y**6 * s ** 1 * huge_eq ** 1
// pi[3] = y ** 2 * l_given_y ** 0 * n_l_given_y**5 * s ** 2 * huge_eq ** 2
// pi[4] = y ** 1 * l_given_y ** 0 * n_l_given_y**4 * s ** 3 * huge_eq ** 3
// pi[5] = y ** 0 * l_given_y ** 0 * n_l_given_y**3 * s ** 4 * huge_eq ** 4
// pi[6] = y ** 0 * l_given_y ** 1 * n_l_given_y**2 * s ** 5 * huge_eq ** 4
// pi[7] = y ** 0 * l_given_y ** 2 * n_l_given_y**1 * s ** 6 * huge_eq ** 4
// pi[8] = y ** 0 * l_given_y ** 3 * n_l_given_y**0 * s ** 7 * huge_eq ** 4

export const stationaryDistributionCalculation = ({
  s,
  y,
  l_given_y,
  n_l_given_n_y,
}: stationaryDistributionCalculationProps) => {
  console.log(s, y, l_given_y, n_l_given_n_y);
  const n_l_given_y = 1.0 - l_given_y;
  console.log(n_l_given_y);
  const n_y = 1.0 - y;
  const big_eq = l_given_y * y + n_l_given_n_y * n_y;

  interface calculatePiProps {
    pow_y: number;
    pow_l_given_y: number;
    pow_n_l_given_y: number;
    pow_s: number;
    pow_big_eq: number;
  }
  const calculatePi = ({
    pow_y,
    pow_l_given_y,
    pow_n_l_given_y,
    pow_s,
    pow_big_eq,
  }: calculatePiProps) => {
    const pow = Math.pow;
    return (
      pow(y, pow_y) *
      pow(l_given_y, pow_l_given_y) *
      pow(n_l_given_y, pow_n_l_given_y) *
      pow(s, pow_s) *
      pow(big_eq, pow_big_eq)
    );
  };

  const distribution = {
    1: calculatePi({
      pow_y: 4,
      pow_l_given_y: 0,
      pow_n_l_given_y: 7,
      pow_s: 0,
      pow_big_eq: 0,
    }),
    2: calculatePi({
      pow_y: 3,
      pow_l_given_y: 0,
      pow_n_l_given_y: 6,
      pow_s: 1,
      pow_big_eq: 1,
    }),
    3: calculatePi({
      pow_y: 2,
      pow_l_given_y: 0,
      pow_n_l_given_y: 5,
      pow_s: 2,
      pow_big_eq: 2,
    }),
    4: calculatePi({
      pow_y: 1,
      pow_l_given_y: 0,
      pow_n_l_given_y: 4,
      pow_s: 3,
      pow_big_eq: 3,
    }),
    5: calculatePi({
      pow_y: 0,
      pow_l_given_y: 0,
      pow_n_l_given_y: 3,
      pow_s: 4,
      pow_big_eq: 4,
    }),
    6: calculatePi({
      pow_y: 0,
      pow_l_given_y: 1,
      pow_n_l_given_y: 2,
      pow_s: 5,
      pow_big_eq: 4,
    }),
    7: calculatePi({
      pow_y: 0,
      pow_l_given_y: 2,
      pow_n_l_given_y: 1,
      pow_s: 6,
      pow_big_eq: 4,
    }),
    8: calculatePi({
      pow_y: 0,
      pow_l_given_y: 3,
      pow_n_l_given_y: 0,
      pow_s: 7,
      pow_big_eq: 4,
    }),
  };

  console.log(distribution);
  const sum = Object.entries(distribution).reduce((acc, currentVal) => {
    // const curr = currentVal as unknown as number;
    return acc + currentVal[1];
  }, 0);

  console.log(sum);

  const normalizedDistribution = Array.from(
    Object.entries(distribution).map((p) => {
      return { π: p[1] / sum, name: +p[0] };
    })
  );

  return normalizedDistribution;
};
