/* eslint-disable react/prop-types */
import * as React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import OrderSummary from "./OrderSummary/OrderSummary";
import PaymentMethod from "./PaymentMethod/PaymentMethod";
import DeliveryAddressForm from "./DeliveryAddressForm/DeliveryAddressForm";
import { dataContext } from "../../context/context";
const steps = ["Delivery Address", "Order Summary", "Payment method"];
function CheckOut() {
  const value = React.useContext(dataContext);
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [status, setStatus] = React.useState(false);
  useEffect(() => {
    if (Object.keys(value.deliveryAddress).length === 0) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, [value.deliveryAddress]);
  const isStepOptional = (step) => {
    return step === 1;
  };
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  function handleClick(label) {
    if (label == "Delivery Address") {
      setActiveStep(0);
    } else if (label == "Order Summary") {
      setActiveStep(1);
    } else if (label == "Payment method") {
      setActiveStep(2);
    }
  }
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step
              key={label}
              {...stepProps}
              onClick={() => handleClick(label)}
              style={{ cursor: "pointer" }}
            >
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            <div className="bg-white p-6 rounded-md shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Billing Address</h2>
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-600">
                  Name:- {value.deliveryAddress.name}
                </p>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-600">
                  Address:- {value.deliveryAddress.address}{" "}
                </p>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-600">
                  City:- {value.deliveryAddress.city}
                </p>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-600">
                  Locality:- {value.deliveryAddress.locality}{" "}
                </p>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-600">
                  Phone Number:- {value.deliveryAddress.phoneNumber}
                </p>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-600">
                  Pincode:- {value.deliveryAddress.pincode}{" "}
                </p>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-600">
                  State:- {value.deliveryAddress.state}
                </p>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-600">
                  Payment Method:- {value.payment}
                </p>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-600">
                  Price:- ₹{value.total}
                </p>
              </div>
            </div>
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {activeStep === 0 && <DeliveryAddressForm />}
          {activeStep === 1 && <OrderSummary />}
          {activeStep === 2 && <PaymentMethod />}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext} disabled={status === true}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
export default CheckOut;
