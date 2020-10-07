import React, {Component} from "react";
import {Box, Button} from "@material-ui/core";
import {Form} from "@alicompiler/raf-core";
import {Text} from "../Text";
import {Password} from "../Password";
import IForm from "@alicompiler/raf-core/build/Form/IForm";

export class LoginExample extends Component {

    render() {
        return <Box display={'flex'} justifyContent={'center'}>
            <Box width={400}>
                <Form fields={[
                    {
                        as: Text, name: 'username', extra: {placeholder: 'Username', label: 'Username'}
                    },
                    {
                        as: Password, name: 'password', extra: {placeholder: 'Password', label: 'Password'}
                    },
                    [
                        {as: Text, name: 'test1', extra: {placeholder: 'Test 1'}},
                        {as: Text, name: 'test2', extra: {placeholder: 'Test 2'}},
                        {as: Text, name: 'test3', extra: {placeholder: 'Test 3'}}
                    ]
                ]} extra={{
                    renderOptions: {
                        header: 'Login Example',
                        actionDivider: false,
                        actions: [(form: IForm) => <Button variant={'contained'} color={'primary'}
                                                           onClick={() => form.submit()}>Login</Button>]
                    }
                }}/>
            </Box>
        </Box>;
    }
}