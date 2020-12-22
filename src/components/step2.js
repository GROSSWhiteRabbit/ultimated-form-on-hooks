import { yupResolver } from "@hookform/resolvers/yup";
import { Checkbox, FormControlLabel, Typography } from "@material-ui/core";
import React from "react";
import {  useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDataContext } from "../contextData";
import { Form } from "./form";
import { Input } from "./Input";
import { MainContainer } from "./mainContainer";
import * as yup from "yup";
import { SubmitButton } from "./submitButton";
import { parsePhoneNumberFromString } from "libphonenumber-js";

const phoneRegExp = /^\+?3?8?(0[\s\.-]\d{2}[\s\.-]\d{3}[\s\.-]\d{4})$/;

const schema = yup.object().shape({
    email: yup.string().email().required(),
    phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
});

export const Step2 = () => {
    const { setObjData, data } = useDataContext();

    const {
        register,
        handleSubmit,
        errors,
        watch,
        setValue,
        getValues,
        clearErrors
    } = useForm({
        defaultValues: {
            email: data.email,
            phone: data.phone,
            hasPhone: data.hasPhone,
        },
        mode: "onBlur",
        resolver: yupResolver(schema),
    });
    let history = useHistory();

    const hasPhone = watch("hasPhone");

    const onSubmit = (formData) => {
        history.push("step3");
        setObjData(formData);
        console.log(data);
    };

    const formatPhoneNumber = (value) => {
        value = value.length >= 15 ? value.slice(0, 16) : value;
        value = value.replace(/[^0-9+]/gi, "");

        const phoneNumber = parsePhoneNumberFromString(value);
        console.log(phoneNumber);
        if (!phoneNumber) {
            return value.replace(/^..?.?/, "+38");
        } else {
            return phoneNumber.formatInternational();
        }
    };

    console.log(errors);
    return (
        <MainContainer>
            <Typography component="h2" variant="h4">
                🦄 step 2
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    ref={register}
                    type="email"
                    required
                    label="Email"
                    name="email"
                    id="email"
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            inputRef={register}
                            defaultChecked={data.hasPhone}
                            defaultValue={data.hasPhone}
                            name="hasPhone"
                            
                        />
                    }
                    label="Do you have phone number?"
                />

                {hasPhone && (
                            <Input
                                ref={register}
                                type="tel"
                                required
                                label="Phone"
                                name="phone"
                                id="phone"
                                error={!!errors.phone}
                                helperText={errors?.phone?.message}
                                onChange={(e) => {
                                    clearErrors("phone")
                                    setValue(
                                        "phone",
                                        formatPhoneNumber(getValues("phone"))
                                    );
                                }}
                            />
                        )}
                    
                
                <SubmitButton>next</SubmitButton>
            </Form>
        </MainContainer>
    );
};
