import React from 'react'
import TextField from '@material-ui/core/TextField';

function Numberinkb() {
    return (
        <div>
            <TextField type="number" defaultValue="20" label="Enter Size in Kb" variant="outlined" />
        </div>
    )
}

export default Numberinkb
