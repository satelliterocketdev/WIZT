import React, {Component} from 'react';
import {withStyles, AppBar, Card, Icon, IconButton, Tab, Tabs, Typography} from '@material-ui/core';
import {Line} from 'react-chartjs-2';

class Widget8 extends Component {

    state = {
        tabIndex: 0
    };

    handleChange = (event, tabIndex) => {
        this.setState({tabIndex});
    };

    handleChangeIndex = index => {
        this.setState({tabIndex: index});
    };

    render()
    {
        const {data, theme} = this.props;
        const {tabIndex} = this.state;
        const dataWithColors = data.datasets[tabIndex].map(obj => ({
            ...obj,
            borderColor: theme.palette.secondary.main
        }));
        return (
            <Card className="w-full rounded-8 shadow-none border-1">

                <AppBar position="static">

                    <div className="p-16 pr-4 flex flex-row items-center justify-between">

                        <div className="pr-16">
                            <Typography className="h1 font-300" color="inherit">Sup Up</Typography>
                            <Typography className="h5" color="inherit">Lifetime sum of you site</Typography>
                        </div>

                        <div>
                            <IconButton aria-label="more" color="inherit">
                                <Icon>more_vert</Icon>
                            </IconButton>
                        </div>
                    </div>
                    <div className="p-16 pt-8 flex flex-row justify-between items-end">
                        <Typography className="text-48 font-300 leading-none" color="inherit">{data.datasets[tabIndex][0].Sum}</Typography>
                        <div className="flex flex-row items-center">
                            {data.datasets[tabIndex][0].value > 0 && (
                                <Icon className="text-green">trending_up</Icon>
                            )}
                            {data.datasets[tabIndex][0].value < 0 && (
                                <Icon className="text-red">trending_down</Icon>
                            )}
                            <div className="ml-8">
                                {data.datasets[tabIndex][0].value}
                                ({data.change.percentage}%)
                            </div>
                        </div>
                    </div>
                    <Tabs
                        value={tabIndex}
                        onChange={this.handleChange}
                        variant="fullWidth"
                    >
                        <Tab label="Earnings" className="min-w-0"/>
                        <Tab label="Labels" className="min-w-0"/>
                        <Tab label="LoggedIns" className="min-w-0"/>
                    </Tabs>
                </AppBar>
                {/* <Line
                    data={{
                        labels  : data.labels,
                        datasets: dataWithColors
                    }}
                    options={data.options}
                /> */}
            </Card>
        );
    }
}

export default withStyles(null, {withTheme: true})(Widget8);
