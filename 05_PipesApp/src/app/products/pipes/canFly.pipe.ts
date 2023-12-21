import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'canFly'
})
export class CanFLyPipe implements PipeTransform{

  transform(canFLy: boolean): "Can fly" | "Can't fly" {
    return (canFLy) ? "Can fly" : "Can't fly";
  }

}
