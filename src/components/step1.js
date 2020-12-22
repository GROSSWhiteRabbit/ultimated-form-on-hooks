import { Typography } from "@material-ui/core";
import React from "react";
import { Form } from "./form";
import { MainContainer } from "./mainContainer";
import { Input } from "./Input";
import { SubmitButton } from "./submitButton";
import { useForm } from "react-hook-form";
import { useDataContext } from "../contextData";
import { useHistory } from "react-router-dom";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'


const schema = yup.object().shape({
    firstName: yup.string().matches(/^([^0-9]*)$/, 'The field must not contain numbers').required(),
    secondName: yup.string().matches(/^([^0-9]*)$/, 'The field must not contain numbers').required()

})


export const Step1 = () => {
    const {setObjData, data} = useDataContext()

    const {register, handleSubmit,errors} = useForm({
        defaultValues: {firstName: data.firstName, secondName:data.secondName},
        mode: 'onBlur',
        resolver: yupResolver(schema)
    });
    let history = useHistory();

    const onSubmit = (formData)=> {
        setObjData(formData);
        history.push('step2')
        console.log(data);
    }

    return (
        <MainContainer>
            <Typography  component="h2" variant="h4">
            🦄 step 1
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)
                }>
                <Input
                    ref={register}
                    type="text"
                    required
                    label="FirstName"
                    name="firstName"
                    id="firstName"
                    error ={!!errors.firstName}
                    helperText = {errors?.firstName?.message}
                />
                <Input
                    ref={register}
                    type="text"
                    required
                    label="SecondName"
                    name="secondName"
                    id="secondtName"
                    error ={!!errors.secondName}
                    helperText = {errors?.secondName?.message}
                />
                <SubmitButton>next</SubmitButton>
            </Form>
        </MainContainer>
    );
};
