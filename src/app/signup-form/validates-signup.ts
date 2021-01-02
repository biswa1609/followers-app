import { AbstractControl, ValidationErrors } from '@angular/forms';

export  class SignupValidator
{
    static checkSpaces(control:AbstractControl): ValidationErrors | null
    {
        if((control.value as string).indexOf(' ')>=0)
            return {blankSpace:true}
        return null;

    }
    //Asychronise call to validator.
    static alreadyTaken(control:AbstractControl): Promise<ValidationErrors|null>
    {

        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
            if(control.value === 'biswajit')
                resolve({shouldbeunique:true})
            else
                resolve(null)
        },5000)
        })
    }
}