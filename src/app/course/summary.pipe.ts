import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
name:'summary',

})
export class Summary implements PipeTransform
{
    transform(value: string, args?: number)
    {
        if (!value)
            return null;
        return value.substr(0,50);

    }
}