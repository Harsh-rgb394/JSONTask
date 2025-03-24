import React from "react";
import Form from "@rjsf/core"
import validator from "@rjsf/validator-ajv8";
import { Loanmodel } from "../Schemas/Loanmodel"
import { Box, Typography, Paper } from "@mui/material";
const Loanform = ({ formData, onSubmit }) => {


    return (
        // <Form
        //     schema={Loanmodel}
        //     validator={validator}
        //     formData={formData}
        //     onSubmit={onSubmit}
        // />
        <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
            <Typography variant="h5" gutterBottom>
                Loan Details
            </Typography>
            <Box sx={{ maxWidth: 600, margin: "auto" }}>
                <Form
                    schema={Loanmodel}
                    validator={validator}
                    formData={formData}
                    onSubmit={onSubmit}
                />
            </Box>
        </Paper>
    )
}

export default Loanform;