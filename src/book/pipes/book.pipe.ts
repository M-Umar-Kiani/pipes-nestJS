import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { plainToInstance  } from "class-transformer";
import { BookDto } from "../dto/book.dto";
import { validate } from "class-validator";

export class BookPipe implements PipeTransform{
    async transform(value: any, metadata: ArgumentMetadata): Promise<any>  {
        
        // class transformer convert object class
        const bookClass = plainToInstance(BookDto, value); 
        // Class Validation
        const errors = await validate(bookClass);
    
        if(errors.length > 0 ){
            throw new BadRequestException("Validate Failed" + JSON.stringify(errors))
        }
        return undefined;        
    }
}