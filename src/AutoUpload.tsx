import {AutoUploadField} from "@autofiy/raf-core";
import React from "react";
import {Avatar, Box, Button, CircularProgress, TextField, Typography} from "@material-ui/core";
import {AutoUploadFieldExtraConfiguration} from "@autofiy/raf-core/build/Field/Concrete/AutoUploadField/AutoUploadFieldExtraConfiguration";
import {FieldProps} from "@autofiy/raf-core/build/Field/FieldProps";
import {Localization} from "./Localization";

export interface Extra extends AutoUploadFieldExtraConfiguration {
    getFileUrl?: (uploadedFile: string) => string;
    renderUploadedFile?: (uploadedFile: string | null, field: AutoUpload) => any;
    label?: string;
    cancel?: ((field: AutoUpload) => any) | string
}

export class AutoUpload extends AutoUploadField<Extra> {

    constructor(props: FieldProps) {
        super(props);
        this.state.value.extractValueFromEvent = e => {
            return (e.target.files ?? [null])[0];
        };
    }

    render(): any {

        return <Box display={"flex"} alignItems={"center"}>
            <Box>
                {this.renderLabel()}
            </Box>
            <Box>
                {this.renderContent()}
            </Box>
        </Box>
    }

    protected renderProgress(): any {
        return <Box display="flex" alignItems={'center'}>
            <CircularProgress variant="indeterminate"/>
            <Box p={4}>
                <Typography variant="caption" component="div" color="textSecondary">
                    {`${Math.round(this.extra().getProgress())}%`}
                </Typography>
            </Box>
            {
                this.renderCancel()
            }
        </Box>;
    }

    protected renderUploadedFile(): any {
        let renderUploadedFile = this.extra().config('renderUploadedFile');
        if (renderUploadedFile) {
            return renderUploadedFile(this.extra().getUploadedFile(), this);
        }
        return <Box display={"flex"} alignItems={"center"}>
            {this.renderUploadedFileContent()}
            <Box p={2}/>
            <Button variant={"outlined"} color={"secondary"} onClick={() => this.extra().removeUploadedFile()}>
                {Localization.remove}
            </Button>
        </Box>;
    }

    private renderLabel(): any {
        const label = this.extra().config('label');
        if (!label) {
            return null;
        }
        return <Box>
            <Typography>{label}</Typography>
            <Box p={2}/>
        </Box>
    }

    private renderContent(): any {
        const isUploading = this.extra().isUploading();
        if (isUploading) {
            return this.renderProgress();
        }
        const hasUploadedFile = this.extra().hasUploadedFile();
        if (hasUploadedFile) {
            return this.renderUploadedFile();
        }
        return this.renderSelectFile();
    }

    private renderCancel(): any {
        const cancel = this.extra().config('cancel');
        let cancelText = '';
        if (typeof cancel === "function") {
            return cancel(this);
        } else if (!cancel) {
            cancelText = Localization.cancel;
        } else {
            cancelText = cancel;
        }
        return <Button onClick={() => this.getUploader().cancel()}
                       color={'secondary'}
                       variant={"outlined"}>{cancelText}</Button>
    }

    private renderUploadedFileContent() {
        const uploadedFile = this.extra().getUploadedFile()!;
        const getFileUrl = this.extra().config('getFileUrl') ?? ((file: string) => file);
        const url = getFileUrl(uploadedFile);
        if (uploadedFile.endsWith(".jpg") || uploadedFile.endsWith(".png") || uploadedFile.endsWith(".jpeg")) {
            return <Avatar src={url}/>;
        } else {
            return <Typography variant={'caption'} color={'primary'}>{uploadedFile}</Typography>;
        }
    }

    private renderSelectFile(): any {
        return <TextField type={'file'}
                          onChange={(e: any) => this.value().getOnChangeHandler().handle(e)}/>;
    }

}