export default function Calc(open_current, open_voltage, open_power) {
  console.log(open_current, open_voltage, open_power)
  var open_resistance = Math.pow(open_voltage, 2) / open_power;
  var open_reactance =
    open_voltage /
    Math.pow(Math.pow(open_current, 2)-(open_voltage / Math.pow(open_resistance, 2)), 0.5);
    setTimeout(() => console.log(open_reactance, open_resistance), 1000)
    return {
      "open_reactance": open_reactance,
      "open_resistance": open_resistance
    }
}
