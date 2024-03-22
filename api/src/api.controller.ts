import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller()
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get('/bus-times')
  getBusTimes() {
    return this.apiService.getBusTimes();
  }

  @Get('/bus-times/:busId')
  getOneBusTimes(@Param('busId', ParseIntPipe) busId: number) {
    return this.apiService.getOneBusTimes(busId);
  }
}
