import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsUrl, IsIn, IsOptional} from 'class-validator';
import { ProjectStatusEnum } from '../../../common/enums/project-status.enum';

/**
 * Allows you to define the fields
 * that should go when creating a new user.
 */
@InputType()
export class CreateOrUpdateProjectInput{

    @IsNotEmpty({
      message: "Project title can not be empty"
    })
    @Field()
    title: string

    @IsNotEmpty({
      message : "Project description can not be empty"
    })
    @Field()
    description : string;

    @IsOptional()
    @IsUrl({}, {
      message: 'Verify that the URL is valid'
    })
    @Field({
      nullable: true
    })
    urlDemo: string;

    @IsOptional()
    @IsUrl({}, {
      message: 'Verify that the URL is valid'
    })
    @Field({
      description: 'If the repository project is publicly accessible',
      nullable: true
    })
    urlRepository: string;

    @IsNotEmpty({
      message:  "Proyect status is required"
    })
    @IsIn([ProjectStatusEnum.FINISHED, ProjectStatusEnum.IN_PROGRESS], {
      message: "Project status is incorrect"
    })
    @Field()
    status : ProjectStatusEnum
}