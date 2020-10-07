import React, {Component} from 'react';
import {Box, Divider} from "@material-ui/core";
import {LoginExample} from "./LoginExample";
import CreateProfileExample from "./CreateProfileExample";
import ScheduleExample from "./ScheduleExample";

class MaterialExample extends Component {
    render() {
        return (
            <Box>

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

export default MaterialExample;