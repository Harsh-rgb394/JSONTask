import React, { useState } from "react";
import Businessform from "./Businessform";
import Loanform from "./Loanform";
import { Box, Button, Stepper as MuiStepper, Step, StepLabel, Typography } from "@mui/material";


const steps = ["Business Details", "Loan Details"];

const Stepper = () => {
    const [step, setstep] = useState(0);
    const [formData, setFormData] = useState({});

    const handleNext = () => {
        setstep((prev) => prev + 1);
    }
    const handleBack = () => {
        setstep((prev) => prev - 1);
    }

    const handleBusinessDetailsSubmit = ({ formData }) => {
        // setformdata({ ...formdata, businessDetails: formdata });
        console.log(formData);
        setFormData((prevData) => ({ ...prevData, businessDetails: formData }));
        console.log("Final Form Data:", formData);

        handleNext();
    };

    const handleLoanDetailsSubmit = ({ formData }) => {
        setFormData((prevData) => ({ ...prevData, loanDetails: formData }));
        console.log("Final Form Data:", { ...formData, loanDetails: formData });
    };

    const renderStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <Businessform
                        formData={formData.businessDetails}
                        onSubmit={handleBusinessDetailsSubmit}
                    />
                );
            case 1:
                return (
                    <Loanform
                        formData={formData.loanDetails}
                        onSubmit={handleLoanDetailsSubmit}
                    />
                );
            default:
                return <Typography>Unknown step</Typography>;
        }
    };

    return (
        <>

            <Box sx={{ maxWidth: 800, margin: "auto", padding: 3 }}>
                <MuiStepper step={step} alternativeLabel sx={{ marginBottom: 4 }}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </MuiStepper>
                {renderStepContent(step)}
                <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}>
                    {step > 0 && (
                        <Button onClick={handleBack} sx={{ marginRight: 2 }}>
                            Back
                        </Button>
                    )}
                    {step < steps.length - 1 && (
                        <Button variant="contained" onClick={handleNext}>
                            Next
                        </Button>
                    )}
                </Box>
            </Box>
        </>
    )
}

export default Stepper;