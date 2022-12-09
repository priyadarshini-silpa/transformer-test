import React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import img from "../media/short.jpg";
import { Button } from "@mui/material";
import Calc from "../pages/short_ckt";

export default function MediaCard() {
  const [currentInput, setCurrentInput] = useState("");
  const handleCurrentInputChange = (event) => {
    setCurrentInput(event.target.value.replace(/\D/g, ''));
  };
  const [voltageInput, setVoltageInput] = useState("");
  const handleVoltageInputChange = (event) => {
    setVoltageInput(event.target.value.replace(/\D/g, ''));
  };
  const [powerInput, setPowerInput] = useState("");
  const handlePowerInputChange = (event) => {
    setPowerInput(event.target.value.replace(/\D/g, ''));
  };

  const [shortResistance, setshortResistance] = useState("");
  const [shortReactance, setshortReactance] = useState("");

  const GetVals = () => {
    var result
    result = Calc(currentInput, voltageInput, powerInput)
    console.log(result)
    setshortReactance(result.short_reactance)
    setshortResistance(result.short_resistance)
  }
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardMedia component="img" height="200" image={img} alt="short circuit" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Short Circuit Test
        </Typography>
      </CardContent>
      <CardActions>
        <TextField
          className="current"
          id="current-short"
          variant="outlined"
          label="Current"
          value={currentInput}
          onChange={handleCurrentInputChange}
        />
        <TextField
          id="voltage-short"
          label="Voltage"
          variant="outlined"
          value={voltageInput}
          onChange={handleVoltageInputChange}
        />
        <TextField
          id="power-short"
          label="Power"
          variant="outlined"
          value={powerInput}
          onChange={handlePowerInputChange}
        />
      </CardActions>
      <Button
        variant="contained"
        style={{ background: "#2E3B55" }}
        onClick={(event) =>
          GetVals()
        }
      >
        Calculate 
      </Button>
      <Typography>
        Equivalent Resistance={shortResistance}
      </Typography>
      <Typography>
        Equivalent Reactance={shortReactance}
      </Typography>
    </Card>
  );
}
