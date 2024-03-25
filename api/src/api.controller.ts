import { Controller, Get } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller()
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get('/bus-times')
  getBusTimes() {
    return this.apiService.getBusTimes();
  }

  // Note: the changes below would allow us to filter by a query string like:
  // "/bus-times?route=a,b,c". However, for the "filter visible routes" FE
  // feature, we actually don't want to filter like this in the BE! (Because,
  // given how everything is currently set up, that would mean the FE wouldn't
  // know which routes actually had data to display.)
  //
  // @Get('/bus-times')
  // getBusTimes(@Query('route', new DefaultValuePipe('all')) route: string) {
  //   if (route === 'all') {
  //     return this.apiService.getBusTimes([route]);
  //   }

  //   // Todo: could we use a pipe to validate this query string? (Where?)
  //   const routes: Array<string> = route.split(',');

  //   return this.apiService.getBusTimes(routes);
  // }
}
