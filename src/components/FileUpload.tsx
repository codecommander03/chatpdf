"use client"
import React from 'react'
import { useDropzone } from 'react-dropzone'

type Props = {}

const FileUpload = (props: Props) => {
    const { getRootProps, getInputProps } = useDropzone();
    return (
        <div className='p-2 bg-white rounded-xl'>
            <div {...getRootProps}>
                <input {...getInputProps} />
            </div>
        </div>
    )
}

export default FileUpload