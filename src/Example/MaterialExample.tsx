import React, {Component} from 'react';
import {Box, Divider, Theme, withTheme} from "@material-ui/core";
import {LoginExample} from "./LoginExample";
import CreateProfileExample from "./CreateProfileExample";
import ScheduleExample from "./ScheduleExample";

interface Props {
    theme: Theme;
}

class MaterialExample extends Component<Props> {
    render() {
        const {theme} = this.props;
        return (
            <Box style={{background : theme.palette.background.default}}>

                <LoginExample/>

                <Box p={2}/>
                <Divider/>
                <Box p={2}/>

                <CreateProfileExample/>

                <Box p={2}/>
                <Divider/>
                <Box p={2}/>

                <Box display={"flex"} justifyContent={"center"}>
                    <Box width={600}>
                        <ScheduleExample/>
                    </Box>
                </Box>

            </Box>
        );
    }
}

export default withTheme(MaterialExample);