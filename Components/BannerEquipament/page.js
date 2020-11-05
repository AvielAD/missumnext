import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import ImagenTest from './assets/Hmac.png';
import ImagenTestCholula from './assets/cholula.png';
import Univer from './assets/Univer.png';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#FFFFFF',
        width: '100%',
    },
}));

const Equipament = [
    {
        Imagen: {
            url: ImagenTest
        },
        Titulo: 'Hospital Mac',
        Descripcion: 'Distancia 4km'
    },
    {
        Imagen: {
            url: ImagenTestCholula
        },
        Titulo: 'Zona Turistica Cholula',
        Descripcion: 'Distancia 4km'
    },
    {
        Imagen: {
            url: Univer
        },
        Titulo: 'Universidad de las Americas',
        Descripcion: 'Distancia 4km'
    },

]


const Page = () => {

    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);


    const elements = Equipament.map((item) => {

        return (
            <div className="card col-md-4 border-0" key={item.Imagen.url}>
                <img src={`${item.Imagen.url}`} />
                <div className="w-100 " className="card-img-overlay text-white d-flex align-items-end">
                    <div className="row">
                        <p className="h2 col-md-12 mb-4">{item.Titulo}</p>
                        <span className="col-md-12">{item.Descripcion}</span>
                    </div>

                </div>
            </div>
        )
    })

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };



    return (
        <>
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        <Tab label="Equipamiento Urbano" {...a11yProps(0)} />
                        <Tab label="Turismo" {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <div className="row mt-5">
                            {elements}

                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <div className="row mt-5">
                            {elements}

                        </div>

                    </TabPanel>
                </SwipeableViews>
            </div>

        </>
    );
}

export default Page;