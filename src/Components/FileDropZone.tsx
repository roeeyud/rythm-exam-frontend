import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import {Dispatch, SetStateAction, useState} from "react";
import {useDropzone} from "react-dropzone";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Icon from "@mui/material/Icon";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";
import CircularProgress from "@mui/material/CircularProgress";

const FileArea = styled(Box)(({ theme }) => ({
    background: '#F9FAFB',
    borderRadius: 6,
    margin: 20,
    padding: 20,
    width: 600,
    display: 'flex',
    alignItems: 'center',
    height: 100
}));

const DropBoxComponent = styled(Box)(({ theme }) => ({
    borderColor: theme.palette.primary.main,
    borderStyle: 'dashed',      // TODO: To make the exact border as in the Figma you need to implement an svg solution
    borderWidth: 1,
    borderRadius: 6,
    margin: 20,
    width: 600,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200
}));

interface FileDropZoneProps {
    fileName: string | null,
    setFileName: Dispatch<SetStateAction<string | null>>,
}

export default function FileDropZone({ fileName, setFileName }: FileDropZoneProps) {
    const {getRootProps, getInputProps} = useDropzone({
        onDrop: onFileSelected,
        accept: { 'application/pdf': []},
    });

    const [uploadInProgress, setUploadInProgress] = useState(false);
    async function onFileSelected(files: Array<Blob>) {
        const [file] = files;
        const formData = new FormData();
        formData.append('file', file);
        const requestOptions = {
            method: 'POST',
            body: formData
        };
        setUploadInProgress(true);
        console.log(process.env.REACT_APP_API_URL);
        const uploadResult = await fetch(`${process.env.REACT_APP_API_URL}/invoice`, requestOptions);
        setUploadInProgress(false);
        if (!uploadResult.ok) {
            // TODO: Error handling
        }
        setFileName(await uploadResult.text())
    }
    if (fileName) {
        return <FileArea>
            <Stack direction={'column'} spacing={1}>
                <Typography variant={'body2'} fontWeight={600}>
                    Uploaded file
                </Typography>
                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                    <Icon>
                        <InsertDriveFileIcon />
                    </Icon>
                    <Typography variant={'body2'} fontWeight={600}>
                        {fileName}
                        <IconButton size={'small'} onClick={() => setFileName(null)}>
                            <CancelIcon  />
                        </IconButton>
                    </Typography>
                </Stack>

            </Stack>
        </FileArea>;
    }
    if (uploadInProgress) {
        return <DropBoxComponent>
            <CircularProgress variant={'indeterminate'} />
        </DropBoxComponent>;
    }
    return <DropBoxComponent  {...getRootProps()}>
        <input {...getInputProps()} />
        <Stack direction={'row'} spacing={2} alignItems={'center'}>
            <Icon color={'primary'}>
                <InsertDriveFileIcon />
            </Icon>
            <Typography color={'primary'} variant={'body1'} fontWeight={600}>
                Upload new invoice
            </Typography>
        </Stack>
    </DropBoxComponent>;
}
