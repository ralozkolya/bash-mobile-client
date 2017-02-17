import {Pipe} from "@angular/core";
@Pipe({
  name: 'votes'
})
export class VotesPipe {
  public transform(value: string): string {

    if(!isNaN(parseInt(value))) {
      if(parseInt(value) > 0) {
        return value;
      }
    }

    return '???';
  }
}
