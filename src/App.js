import React, { useState } from "react";

import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import RefreshIcon from "@material-ui/icons/Refresh";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Btn from "./btn";
import * as bloque from "./btns";
import data from "./Gen.json";

import Titulo from "./titulo";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { indigo } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center"
  }
}));

export default function ContainedButtons() {
  const classes = useStyles();

  function refreshPage() {
    window.location.reload(false);
  }

  const DisplayData = data.map((info, i) => {
    var dta = [];
    var date = new Date(info.dt * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var formattedTime =
      hours + ":" + minutes.substr(-2); /*+ ':' + seconds.substr(-2)*/
    dta.push(formattedTime);

    return (
      <tr key={i}>
        <Typography variant="h5" gutterBottom>
          {info.Competicion}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {dta} {info.Partido}
        </Typography>
        {info.Enlacematch !== 0 ? (
          <div className={classes.root}>
            <Btn Valor={info.EnlaceMatchs.valor1} />{" "}
            <Btn Valor={info.EnlaceMatchs.valor2} />{" "}
            <Btn Valor={info.EnlaceMatchs.valor3} />
          </div>
        ) : (
          ""
        )}
        <div>
          <Button variant="contained" color="primary" href={info.Estadisticas}>
            Estadisticas
          </Button>
        </div>
      </tr>
    );
  });

  var lis = [];

  let BB = [
    bloque.Extra[0],

    "",
    "",
    "",
    "",
    "",

    "",
    "",
    "",
    "",
    "",

    /** */
    "error!!1",
    "error!!1",
    "error!!1",
    "error!!1",
    "error!!1",
    "error!!1",
    "error!!1",
    "error!!1",
    "error!!1"
  ];

  /*for (let i = 0; i < Match.length; i++) {
    lis.push(
      <div>
        <Divider />
        <Typography variant="h5" gutterBottom>
          {Title[i]}
          {": "}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {" "}
          {DisplayData}
        </Typography>
      </div>
    );*/
  /*SWITCH*/

  /*switch (i) {
      case i:
        lis.push(<div className={classes.root}>{BB[i]}</div>);
        break;
      default:
      //console.log("default");
    }*/
  /*SWITCH*/

  /*lis.push(
      <div className={classes.root}>
        <Button variant="contained" color="primary" href={Est[i]}>
          Estadisticas
        </Button>
      </div>
    );
  }*/

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h5">
              Calendario {datef}
            </Typography>
            <Titulo />
          </Paper>
        </Grid>
        <div className={classes.root}>
          <Button variant="outlined" color="secondary" onClick={refreshPage}>
            <RefreshIcon />
          </Button>
        </div>
        <div>
          <Divider />
        </div>
        {/*<div>{DisplayData}</div>*/}
      </Container>
    </React.Fragment>
  );
}
export const light = {
  palette: {
    type: "light"
  }
};
export const dark = {
  palette: {
    type: "dark"
  }
};
