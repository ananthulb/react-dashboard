import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
        paddingTop: "20px",
    }
});

const AboutLayout = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const mainCont = "row m-0 " + classes.containerBox;
    return (
        <div>
            <div className={mainCont}>
                <div className="col-8">
                    <div className="row m-0">
                        <div className="col-12">
                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        About Myself
        </Typography> */}
                                    <Typography variant="h5" component="h2">
                                        {/* be{bull}nev{bull}o{bull}lent */}
                                        About Myself
        </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Typography>
                                    {/* <Typography variant="body2" component="p">
                                        well meaning and kindly.
          <br />
                                        {'"a benevolent smile"'}
                                    </Typography> */}
                                </CardContent>
                                {/* <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions> */}
                            </Card>
                        </div>
                        <div className="col-12">
                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        About Myself
        </Typography> */}
                                    <Typography variant="h5" component="h2">
                                        {/* be{bull}nev{bull}o{bull}lent */}
                                        My Skills
        </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Typography>
                                    {/* <Typography variant="body2" component="p">
                                        well meaning and kindly.
          <br />
                                        {'"a benevolent smile"'}
                                    </Typography> */}
                                </CardContent>
                                {/* <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions> */}
                            </Card>
                        </div>
                        <div className="col-12">
                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        About Myself
        </Typography> */}
                                    <Typography variant="h5" component="h2">
                                        {/* be{bull}nev{bull}o{bull}lent */}
                                        Experience
        </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Typography>
                                    {/* <Typography variant="body2" component="p">
                                        well meaning and kindly.
          <br />
                                        {'"a benevolent smile"'}
                                    </Typography> */}
                                </CardContent>
                                {/* <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions> */}
                            </Card>
                        </div>
                        <div className="col-12 ">
                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        About Myself
        </Typography> */}
                                    <Typography variant="h5" component="h2">
                                        {/* be{bull}nev{bull}o{bull}lent */}
                                        Education
        </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Typography>
                                    {/* <Typography variant="body2" component="p">
                                        well meaning and kindly.
          <br />
                                        {'"a benevolent smile"'}
                                    </Typography> */}
                                </CardContent>
                                {/* <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions> */}
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="row m-0">
                        <div className="col-12">Contact</div>
                        <div className="col-12">Location</div>
                        <div className="col-12">Likes</div>
                        <div className="col-12">Friends</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutLayout;
