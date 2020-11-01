import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

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


const Page = ({ Equipament }) => {

    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);


    const elements = Equipament.map((item) => {

        return (
            <div className="card col-md-4" key={item.Imagen.url}>
                <img src={`${process.env.NEXT_PUBLIC_API_HOST}${item.Imagen.url}`} />
                <div className="card-img-overlay">
                    <p className="card-title text'white">{item.Titulo}</p>
                    <p className="card-text">{item.Descripcion}</p>
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
                        <p>Elementos</p>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <p>Elementos</p>

                    </TabPanel>
                </SwipeableViews>
            </div>

        </>
    );
}

export default Page;