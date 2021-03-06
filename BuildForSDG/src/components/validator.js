
export const  emailValidator = (email) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(email).toLowerCase());
}

export const nameValidator = (name) => {
    const nameRegex = /^[a-zA-Z].*[\s\.]*$/gi;

    return nameRegex.test(String(name).toLowerCase());
 
}

export const passwordValidator = (password) => {
    //password should not contain whitespace
   const passwordRegex = /\s/g;
    if(passwordRegex.test(password) ||  password.length < 7) {
        return false;
    }
    return true;
} 

export const phoneValidator = (phon) => {
    const phone = String(phon);
    const phoneRegex = /^0{1}([789]){1}(0){1}([0-9]){8}/g;
    if (phoneRegex.test(phone)) {
        return true;
    }

    return false;
 }

 //check if the file is an image
 export const fileValidator = (file) => {
     console.log(file);
     if(file =="image/jpeg" || file =="image/jpg" || file =="image/png"){
        return true;
     }
     return false;
 }