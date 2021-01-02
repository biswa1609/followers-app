import { AppError } from './app-error';
import { FormGroup } from '@angular/forms';
import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler
{

    handleError(error)
    {
        alert("Unexpected Error Occurred");
        console.log(error)
    }
}
