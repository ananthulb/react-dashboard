import { makeStyles } from '@material-ui/core/styles';
import logo from "../assets/hs.jpeg";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    containerBox: {
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        height: "100vh",
    },
    header: {
        // backgroundImage: "url(src/assets/hs.jpeg)",
        height: "700px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        opacity: 0.3
    },
    indivdualBox: {
        marginTop: "10px",
        marginBottom: "10px"
    },
    chip: {
        margin: "5px"
    }

});
const Test = () => {
    const classes = useStyles();

    return (
        <div className={classes.containerBox}>
            <div style={{ backgroundImage: `url(${logo})` }} className={classes.header}>
                <div>
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <div>
                search bar
            </div>
            <div>
                listing place
            </div>
        </div>
    );
};

export default Test;
