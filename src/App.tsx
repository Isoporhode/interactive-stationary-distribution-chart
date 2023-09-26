import React, { useState } from "react";
import "./App.css";
import Barchart from "./components/Barchart";
import {
  Paper,
  Slider,
  ThemeProvider,
  Typography,
  createTheme
} from "@mui/material";
import { stationaryDistributionCalculation } from "./math";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#8884d8",
      light: "#8884d8",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#47008F",
    },
  },
});

function App() {
  const [sliders, setSliders] = useState({
    s: 15,
    y: 0.18,
    l_given_y: 0.5,
    n_l_given_n_y: 0.99,
  });

  console.log(sliders);

  return (
    <div className="App">
      <header className="App-header">
        <Paper sx={{ padding: 10, borderRadius: 10 }}>
          <Typography variant="h4">
            Interactive Stationary Distribution Chart
          </Typography>

          <ThemeProvider theme={theme}>
            <div>
              <Barchart data={stationaryDistributionCalculation(sliders)} />
              <Typography>s = {sliders.s}</Typography>
              <Slider
                defaultValue={15}
                aria-label="Default"
                valueLabelDisplay="auto"
                onChange={(e) => {
                  const a = e.target as any;
                  setSliders({
                    ...sliders,
                    s: a.value,
                  });
                }}
                min={1}
                max={25}
                step={0.1}
                color="secondary"
              />
              <Typography>P(Y) = {sliders.y}</Typography>

              <Slider
                defaultValue={0.18}
                aria-label="Default"
                valueLabelDisplay="auto"
                onChange={(e) => {
                  const a = e.target as any;
                  setSliders({
                    ...sliders,
                    y: a.value,
                  });
                }}
                min={0}
                max={1}
                step={0.01}
                color="secondary"
              />
              <Typography>P(L|Y) = {sliders.l_given_y}</Typography>

              <Slider
                defaultValue={0.5}
                aria-label="Default"
                valueLabelDisplay="auto"
                onChange={(e) => {
                  const a = e.target as any;
                  setSliders({
                    ...sliders,
                    l_given_y: a.value,
                  });
                }}
                min={0}
                max={1}
                step={0.01}
                color="secondary"
              />
              <Typography>P(nL|nY) = {sliders.n_l_given_n_y}</Typography>

              <Slider
                defaultValue={0.99}
                aria-label="Default"
                valueLabelDisplay="auto"
                onChange={(e) => {
                  const a = e.target as any;
                  setSliders({
                    ...sliders,
                    n_l_given_n_y: a.value,
                  });
                }}
                min={0}
                max={1}
                step={0.01}
                color="secondary"
              />
            </div>
          </ThemeProvider>
        </Paper>
      </header>
    </div>
  );
}

export default App;
