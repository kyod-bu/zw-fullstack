import { Controller, Body, Post, Request } from '@nestjs/common';
import { Form, FormAdminService } from './form-admin.service';

@Controller('api/form-admin')
export class FormAdminController {
  public constructor(private readonly formAdminService: FormAdminService) { }
  @Post()
  async login(@Body() form: Form): Promise<boolean> {
    if (this.formAdminService.check(form)) {
      console.log('提交成功');
      return true;
    } else {
      return false;
    }
  }
}
