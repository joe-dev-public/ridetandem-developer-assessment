import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';

export interface BusTime {
  id: number;
  busId: number;
  destination: string;
  minutesUntilArrival: number;
  nonOperationalDays: Array<number>;
}

@Injectable()
export class ApiService {
  getBusTimes() {
    const randomBusTimes = this.generateRandomBusTimes(5);
    const orderedBusTimes = _.sortBy(randomBusTimes, ['minutesUntilArrival']);

    // Note: this isn't necessarily the best place for this logic.
    // Todo: could make a separate private method?
    const currentDayOfWeek = new Date().getDay();

    // For each bus, check each value in the nonOperationalDays array
    // If any one of those values matches the currentDayOfWeek, omit that bus
    const todayBusTimes = _.filter(orderedBusTimes, (bus: BusTime) => {
      return !bus.nonOperationalDays.includes(currentDayOfWeek);
    });

    return todayBusTimes;
  }
  getOneBusTimes(busId: number) {
    const randomBusTimes = this.generateRandomBusTimes(5);
    const orderedBusTimes = _.sortBy(randomBusTimes, ['minutesUntilArrival']);

    // Note: this isn't necessarily the best place for this logic.
    // Todo: could make a separate private method?
    const currentDayOfWeek = new Date().getDay();

    // For each bus, check each value in the nonOperationalDays array
    // If any one of those values matches the currentDayOfWeek, omit that bus
    const todayBusTimes = _.filter(orderedBusTimes, (bus: BusTime) => {
      return !bus.nonOperationalDays.includes(currentDayOfWeek);
    });

    console.log('joe says', busId);

    const thisRouteOnly = _.filter(todayBusTimes, (bus: BusTime) => {
      return bus.busId == busId;
    });

    return thisRouteOnly;
  }
  private generateRandomBusTimes(timesToGenerate: number) {
    let data: BusTime[] = [];
    for (let i = 0; i < timesToGenerate; i++) {
      const {
        id: busId,
        destination,
        nonOperationalDays,
      } = this.getRandomBusRoute();
      data.push({
        id: i,
        busId,
        destination,
        minutesUntilArrival: _.random(1, 15),
        nonOperationalDays,
      });
    }
    return data;
  }
  private getRandomBusRoute() {
    const busRoutes = [
      { id: 176, destination: 'Newham Close', nonOperationalDays: [1, 3] },
      { id: 185, destination: 'Train Station', nonOperationalDays: [5, 2] },
      {
        id: 193,
        destination: 'Shopping Centre',
        nonOperationalDays: [1, 5, 4],
      },
    ];
    return busRoutes[_.random(0, busRoutes.length - 1)];
  }
}
