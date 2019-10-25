import * as React from "react";
import { useDispatch } from "react-redux";
import { IUserData } from "../../../interfaces/index";
import { itemsFetchData } from "../../../action/addSecretKey";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useStyles } from "./UseStyles";
import { Copyright } from "./Copyright";

export const DataForm: React.FC<{}> = () => {
  const dispatch: any = useDispatch();

  const init: IUserData = {
    name: "",
    password: ""
  };

  const [userInput, setUserInput] = React.useReducer(
    (state: IUserData, newState): IUserData => ({ ...state, ...newState }),
    init
  );

  const handleChange: any = (evt: any) => {
    const { name, value } = evt.currentTarget;
    setUserInput({ [name]: value });
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Вход в аккаунт
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Почта"
            autoComplete="email"
            autoFocus
            value={userInput.name}
            name="name"
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
            value={userInput.password}
            name="password"
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Запомни меня"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(): any => dispatch(itemsFetchData(userInput))}
          >
            Войти в аккаунт
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Забыл пароль?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Еще нет аккаунта? Регистрация"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};
