import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import img from "../media/open.png";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Calc from "../pages/open_ckt";

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

  const [openResistance, setOpenResistance] = useState("");
  const [openReactance, setOpenReactance] = useState("");

  const GetVals = () => {
    var result
    result = Calc(currentInput, voltageInput, powerInput)
    console.log(result)
    setOpenReactance(result.open_reactance)
    setOpenResistance(result.open_resistance)
  }
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardMedia component="img" height="200" image={img} alt="open circuit" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Open Circuit Test
        </Typography>
      </CardContent>
      <CardActions>
        <TextField
          className="current"
          id="current-open"
          variant="outlined"
          label="Current"
          value={currentInput}
          onChange={handleCurrentInputChange}
        />
        <TextField
          id="voltage-open"
          label="Voltage"
          variant="outlined"
          value={voltageInput}
          onChange={handleVoltageInputChange}
        />
        <TextField
          id="power-open"
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
        Equivalent Resistance={openResistance}
      </Typography>
      <Typography>
        Equivalent Reactance={openReactance}
      </Typography>
    </Card>
  );
}
