import { useState } from "react";

const useFormValidation:any = (validationFun:any) => {
    const [input, setInput] = useState("");
    const [inputTouched, setInputTouched] = useState(false);

    const inputIsEmpty = validationFun(input);
    console.log('inputIsEmpty', inputIsEmpty);
    const formValidationObj = {

        input,
        setInput,
        inputTouched,
        setInputTouched,
        inputIsEmpty
    }
    return formValidationObj;

    
}
export default useFormValidation;