function aveSpd(upTime, upSpd, downSpd) {
  // Convert uphill time to hours
  const t_up = upTime / 60;

  // Distance uphill
  const d_up = upSpd * t_up;

  // Downhill distance is the same
  const d_down = d_up;

  // Time downhill
  const t_down = d_down / downSpd;

  // Total distance and time
  const total_distance = d_up + d_down;
  const total_time = t_up + t_down;

  // Average speed (integer result)
  return total_distance / total_time;
}

// Do not change the code below
const upTime = parseInt(prompt("Enter upTime (minutes): "));
const upSpd = parseInt(prompt("Enter upSpd (mph): "));
const downSpd = parseInt(prompt("Enter downSpd (mph): "));

alert(aveSpd(upTime, upSpd, downSpd));
