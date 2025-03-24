import React from "react";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import { Busimodel } from "../Schemas/Busimodel";
import { Box, Typography, Paper } from "@mui/material";

const Businessform = ({ formData, onSubmit }) => {


    return (
        // <Form
        //     schema={Busimodel}
        //     validator={validator}
        //     formData={formData}
        //     onSubmit={onSubmit}
        // />
        <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
            <Typography variant="h5" gutterBottom>
                Business Details
            </Typography>
            <Box sx={{ maxWidth: 600, margin: "auto" }}>
                <Form
                    schema={Busimodel}
                    validator={validator}
                    formData={formData}
                    onSubmit={onSubmit}
                />
            </Box>
        </Paper>
    )
}

export default Businessform;