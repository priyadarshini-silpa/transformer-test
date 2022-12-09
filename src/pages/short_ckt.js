export default function Calc(short_current, short_voltage, short_power) {
    var short_resistance = short_power/Math.pow(short_current,2);
    var short_reactance = Math.pow(Math.pow(short_voltage/short_current,2)-Math.pow(short_resistance,2),0.5)
    console.log("Resistance", short_resistance)
    console.log("Reactance", short_reactance)
    return {
        "short_reactance": short_reactance,
        "short_resistance": short_resistance
    }
}