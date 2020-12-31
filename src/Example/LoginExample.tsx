import React, {Component} from "react";
import {Box, Button} from "@material-ui/core";
import {Form} from "@autofiy/raf-core";
import {Text} from "../Text";
import {Password} from "../Password";
import IForm from "@autofiy/raf-core/build/Form/IForm";

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
                        {as: Text, name: 'pinCode_1', extra: {placeholder: 'X', align: 'center'}},
                        {as: Text, name: 'pinCode_2', extra: {placeholder: 'X'}},
                        {as: Text, name: 'pinCode_3', extra: {placeholder: 'X'}},
                        {as: Text, name: 'pinCode_4', extra: {placeholder: 'X'}},
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