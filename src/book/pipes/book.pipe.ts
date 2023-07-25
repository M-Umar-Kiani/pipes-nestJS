import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";

export class BookPipe implements PipeTransform{
    transform(value: any, metadata: ArgumentMetadata): any {
        if(value.id == 1 ){

        }else {
            throw new BadRequestException("validation failed")
        }
        return undefined;        
    }
}