import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      backgroundColor: '#fcffff',
    },
    gridContainer: {
      border: '1px solid #F8FBFB',
      padding: '70px',
      marginBottom: '10px',
      backgroundColor: '#fcffff',
    },
    button: {
      backgroundColor: '#28B78D',
      color: 'white',
      margin: '3vh',
      '&:hover': {
        backgroundColor: '#28B78D',
        color: 'white',
      },
    },
    heading: {
      marginBottom: '5vh',
    },
    card: {
      position: 'relative',
      border: '1px solid grey',

      flexDirection: 'column',
    },
  })
);

export default useStyles;