import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({ name: 'customRange', async: false })
export class CustomRateRange implements ValidatorConstraintInterface {
    validate(rate: number, args: ValidationArguments) {
        return rate >= 1 && rate <= 10;
    }

  defaultMessage(args: ValidationArguments) {
    return 'rate is bigger than ten or less than one!';
  }
}