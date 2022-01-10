import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
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
    },
    indivdualBox: {
        marginTop: "10px",
        marginBottom: "10px"
    },
    chip: {
        margin: "5px"
    }

});

let mySkills = [
    {
        name: "JavaScript",
        logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
    },
    {
        name: "TypeScript",
        logo: "https://miro.medium.com/max/816/1*TpbxEQy4ckB-g31PwUQPlg.png"
    },
    {
        name: "HTML",
        logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
    },
    {
        name: "CSS/Sass",
        logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
    },
    {
        name: "Node.js",
        logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
    },
    {
        name: "Angularjs",
        logo: "https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/angularjs-logo-blog-header_0.jpg?itok=CUBxFqam"
    },
    {
        name: "Angular2+",
        logo: "https://miro.medium.com/max/500/1*AGUXcFsevau8cNUfjMo3Bw.png"
    },
    {
        name: "React",
        logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
    },
    {
        name: "Bootstrap",
        logo: "data:image/jpeg;base64,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"
    },
    {
        name: "MongoDB",
        logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
    },
    {
        name: "SQL",
        logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png"
    },
    {
        name: "Loopback/Strongloop",
        logo: "data:image/jpeg;base64,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"
    },
    {
        name: "PostgreSQL",
        logo: "https://cdn.holistics.io/landing/databases/postgresql.png"
    },
    {
        name: "Python",
        logo: "data:image/jpeg;base64,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"
    },
    {
        name: "Database Design",
        logo: "https://www.researchgate.net/profile/Radoslava-Kraleva/publication/323466947/figure/fig1/AS:599227063353344@1519878273386/Structure-of-the-relational-database-Mvsemdm-Each-box-on-the-figure-above-contains-one.png"
    },
    {
        name: "Git",
        logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
    },

]

const AboutLayout = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const mainCont = "row m-0 " + classes.containerBox;
    const indiBox = "col-12 " + classes.indivdualBox;
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };
    return (
        <div>
            <div className={mainCont}>
                <div className="col-8">
                    <div className="row m-0">
                        <div className={indiBox}>
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
                        <div className={indiBox}>
                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        About Myself
        </Typography> */}
                                    <Typography variant="h5" component="h2">
                                        {/* be{bull}nev{bull}o{bull}lent */}
                                        My Skills
                                    </Typography>
                                    {mySkills.map((skill) => (
                                        <Chip className={classes.chip}
                                            avatar={<Avatar alt="Natacha" src={skill.logo} />}
                                            label={skill.name}
                                        />
                                    ))}
                                </CardContent>
                                {/* <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions> */}
                            </Card>
                        </div>
                        <div className={indiBox}>
                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        About Myself
        </Typography> */}
                                    <Typography variant="h5" component="h2">
                                        {/* be{bull}nev{bull}o{bull}lent */}
                                        Experience
                                    </Typography>

                                    <div>
                                        <div class="row">
                                            <div class="col-4">
                                                <Typography variant="body2" component="p">
                                                    Skillsme.
                                                    <br />
                                                    {'Auckland'}
                                                    <br />
                                                    {'Nov 2020 – Present'}
                                                </Typography>
                                            </div>
                                            <div class="col-8">
                                                <Typography className={classes.pos} color="textSecondary">
                                                    •	Coordinate website development, communicating with management team and development team to design, build and test Skillsme webapp.
                                                    •	Participate in company strategic meeting to create plans for the next phase of the development.
                                                    •	Debugging, optimisation and code reviews on old and new codes.
                                                    •	Coordinate sprint planining and task allocation.
                                                    •	Mentoring and support for Skillsme hackathons.
                                                    •	Mentoring & Conducing weekly meeting with AUT student final year projects.
                                                    •	Technologies used :- Angular, Angular material, Typescript, Html, SCSS(webapp) , CSS(landing page)

                                                </Typography>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-4">
                                                <Typography variant="body2" component="p">
                                                    3E IT Solutions.
                                                    <br />
                                                    {'India'}
                                                    <br />
                                                    {'July 2016 – Dec 2018'}
                                                </Typography>
                                            </div>
                                            <div class="col-8">
                                                <Typography className={classes.pos} color="textSecondary">
                                                    •	Involved in development of 6+ commercial projects including web and hybrid apps.
                                                    •	Directly responsible for managing and leading two web projects.
                                                    •	Frontend development using AngularJS, HTML, CSS and ionic.
                                                    •	Backend development using Node.js, Express.js, loopback, PostgreSQL, MySQL, MongoDB and AWS lambda service.
                                                    •	Worked with numerous social media Api’s and payment gateway Api’s(Mastercard, stripe).
                                                    •	Involved in project scoping, database design, social media analytics and R&D projects.
                                                    •	Unit testing, Manual testing and bug fixing.

                                                </Typography>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div className={indiBox}>
                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        About Myself
        </Typography> */}
                                    <Typography variant="h5" component="h2">
                                        {/* be{bull}nev{bull}o{bull}lent */}
                                        Education
                                    </Typography>
                                    <div>
                                        <div class="row">
                                            <div class="col-4">
                                                <Typography variant="body2" component="p">
                                                    Auckland university of technology.
                                                    <br />
                                                    {'Auckland'}
                                                    <br />
                                                    {'Nov 2020 – Present'}
                                                </Typography>
                                            </div>
                                            <div class="col-8">
                                                <Typography className={classes.pos} color="textSecondary">
                                                    •	Coordinate website development, communicating with management team and development team to design, build and test Skillsme webapp.
                                                    •	Participate in company strategic meeting to create plans for the next phase of the development.
                                                    •	Debugging, optimisation and code reviews on old and new codes.
                                                    •	Coordinate sprint planining and task allocation.
                                                    •	Mentoring and support for Skillsme hackathons.
                                                    •	Mentoring & Conducing weekly meeting with AUT student final year projects.
                                                    •	Technologies used :- Angular, Angular material, Typescript, Html, SCSS(webapp) , CSS(landing page)

                                                </Typography>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-4">
                                                <Typography variant="body2" component="p">
                                                    3E IT Solutions.
                                                    <br />
                                                    {'India'}
                                                    <br />
                                                    {'July 2016 – Dec 2018'}
                                                </Typography>
                                            </div>
                                            <div class="col-8">
                                                <Typography className={classes.pos} color="textSecondary">
                                                    •	Involved in development of 6+ commercial projects including web and hybrid apps.
                                                    •	Directly responsible for managing and leading two web projects.
                                                    •	Frontend development using AngularJS, HTML, CSS and ionic.
                                                    •	Backend development using Node.js, Express.js, loopback, PostgreSQL, MySQL, MongoDB and AWS lambda service.
                                                    •	Worked with numerous social media Api’s and payment gateway Api’s(Mastercard, stripe).
                                                    •	Involved in project scoping, database design, social media analytics and R&D projects.
                                                    •	Unit testing, Manual testing and bug fixing.

                                                </Typography>
                                            </div>
                                        </div>
                                    </div>
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
                        <div className={indiBox}>Contact</div>
                        <div className={indiBox}>Location</div>
                        <div className={indiBox}>Likes</div>
                        <div className={indiBox}>Friends</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutLayout;
