import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FormEntity } from '../entities/form.entity';

export type Form = {
  name: string;
  tel: string;
  email: string;
  ID: string;
  birth: string;
};

@Injectable()
export class FormAdminService {
  constructor(
    @InjectRepository(FormEntity)
    private readonly formRepository: Repository<FormEntity>,
  ) {}

  check(form: Form): boolean {
    if (
      form.tel.match(/^1[3456789]\d{9}$/) &&
      this.IDCheck(form.ID) &&
      form.email.match(
        /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/,
      ) &&
      this.birthCheck(form.ID, form.birth)
    ) {
      this.formRepository.save(form);
      return true;
    } else {
      return false;
    }
  }

  // 出生年月校验
  birthCheck(ID: string, birth: string) {
    if (!birth.match(/^\d{4}-((0([1-9]))|(1(0|1|2)))$/)) {
      return false;
    }
    const year = ID.slice(6, 10);
    const month = ID.slice(10, 12);
    const birthArr = birth.split('-');
    if (year === birthArr[0] && month === birthArr[1]) {
      return true;
    } else {
      return false;
    }
  }

  // 身份证 ID 校验
  IDCheck(ID: string) {
    if (
      !ID.match(
        /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/,
      )
    ) {
      return false;
    }
    let sum = 0;
    for (let i = 18; i > 0; i--) {
      if (i === 1 && ID[17] === 'X') {
        sum += 10;
      }
      sum += Number(ID[18 - i]) * (Math.pow(2, i - 1) % 11);
    }
    if (sum % 11 === 1) {
      return true;
    } else {
      return false;
    }
  }
}
