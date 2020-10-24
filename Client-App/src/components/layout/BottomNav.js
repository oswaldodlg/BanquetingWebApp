import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import InfoIcon from '@material-ui/icons/Info';
import { useHistory } from 'react-router-dom';
import ScrollToTop from '../misc/ScrollToTop';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: 0,
    backgroundColor: "#6BBFA8",
    color: "whitesmoke",
    width: "100%",
  },
  MuiBottomNavigationActionroot: {
    color: 'whitesmoke'
  }
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const history = useHistory();

    const experiencias = () => history.push("/experiencias");
    const info = () => history.push("/info");
    const inicio = () => history.push('/');

  return (
        <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >     <ScrollToTop />
          <BottomNavigationAction onClick={inicio} className="bottom-buttons" label="Inicio" icon={<HomeIcon />} />
          <BottomNavigationAction onClick={experiencias} className="bottom-buttons" label="Experiencias" icon={<FavoriteIcon />} />
          <BottomNavigationAction onClick={info} className="bottom-buttons" label="Info" icon={<InfoIcon />} />
        </BottomNavigation>
  );
}