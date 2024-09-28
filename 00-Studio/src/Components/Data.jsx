 import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
 import ListIcon from '@mui/icons-material/List';
 import InfoIcon from '@mui/icons-material/Info';
 import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
 import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
// import { db } from '../firebase';
// import {db} from "../firebase"



const DataContainer = styled.div`
 position: absolute;
  top: 0;
  right: 50%;
  transform: translateX(50%);
  
  `

const DataHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    height: 40px;
    .headerLeft {
        display: flex;
        align-items: center;
    }
    .headerRight svg {
        margin:0px 10px;
    }
`

const DataGrid = styled.div`
    display: flex;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
`

const DataFile = styled.div`
    text-align: center;
    border: 1px solid rgb(204 204 204 / 46%);
    margin: 10px;
    min-width: 200px;
    padding: 10px 0px 0px 0px;
    border-radius: 5px;
    svg {
        font-size: 60px;
        color:gray
    }
    p {
        border-top: 1px solid #ccc;
        margin-top: 5px;
        font-size: 12px;
        background: whitesmoke;
        padding: 10px 0px;
    }
`
const DataListRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    padding: 10px;
    p {
        display: flex;
        align-items: center;
        font-size: 13px;
        b {
            display: flex;
            align-items: center;
        }
        svg {
            font-size: 22px;
            margin:10px
        }
    }
`

const Data = () => {
     

     
    
    return (
        <DataContainer>
            <DataHeader>
                <div className="headerLeft">
                    <p>My Drive</p>
                    <ArrowDropDownIcon />
                </div>
                <div className="headerRight">
                    <ListIcon />
                    <InfoIcon />
                </div>
            </DataHeader>
            <div>
                <DataGrid>

                         <DataFile>
                            <InsertDriveFileIcon />
                            {/* <p>{file.data.filename}</p> */}
                            <p>File name</p>
                        </DataFile>

 
                 </DataGrid>
                <div>
                    <DataListRow>
                        <p><b>Name <ArrowDownwardIcon /></b></p>
                        <p><b>Owner</b></p>
                        <p><b>Last Modified</b></p>
                        <p><b>File Size</b></p>
                    </DataListRow>
                         <DataListRow >
                            {/* <a href={file.data.fileURL} target='_blank'> */}
                                <p>Name<InsertDriveFileIcon /> </p>
                            {/* </a> */}
                            <p>Me</p>
                            <p>yesterday</p>
                            <p>1 GB</p>
                        </DataListRow>
                 </div>
            </div>
        </DataContainer>
    )
}
export default Data