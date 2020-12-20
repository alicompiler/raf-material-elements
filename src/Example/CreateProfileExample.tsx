import React, {Component} from 'react';
import {Box} from "@material-ui/core";
import {Form} from "@autofiy/raf-core";
import {Text} from "../Text";
import {Select} from "../Select";
import {NativeDate} from "../NativeDate";
import {AutoUpload} from "../AutoUpload";
import {Slider} from "../Slider";
import {Checkbox} from "../Checkbox";
import {KeyValueFormRenderer} from "../Renderers/FormRenderer/KeyValueFormRenderer/KeyValueFormRenderer";

class CreateProfileExample extends Component {
    render() {
        return (
            <Box>
                <Form fields={[
                    {as: Text, name: 'name', extra: {placeholder: 'Name', __label: 'Name'}},
                    {as: Text, name: 'username', extra: {placeholder: 'Username', __label: 'Username'}},
                    {as: Text, name: 'email', extra: {placeholder: 'Email', __label: 'Email'}},
                    {
                        as: Select, name: 'Role', extra: {
                            placeholder: 'Name', __label: 'Name', options:
                                [{text: 'User', value: 'user'}, {text: 'Admin', value: 'admin'}]
                        }
                    },
                    {as: NativeDate, name: 'birthDate', extra: {placeholder: 'BirthDate', __label: 'BirthDate'}},
                    {as: Slider, name: 'level', extra: {__label: 'Evaluate Your Self'}},
                    {
                        as: AutoUpload,
                        name: 'profileImage',
                        extra: {
                            __label: 'Profile Image',
                            uploadedFileExtractorFromResponse: () => 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png',
                            uploadOptions: {
                                url: 'http://httpbin.org/post',
                            }
                        }
                    },
                    {as: Checkbox, name: 'acceptAgreement', extra: {__label: 'Policy Agreement'}}
                ]} services={{formRenderer: form => new KeyValueFormRenderer(form)}}
                      initialValues={{'acceptAgreement': true}}
                      extra={{
                          renderOptions: {header: 'Create Your Profile'}
                      }}
                />
            </Box>
        );
    }
}

export default CreateProfileExample;