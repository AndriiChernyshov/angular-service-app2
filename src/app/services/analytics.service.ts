import { Injectable } from '@angular/core';

import { Metric, AnalyticsImplementation } from '../models/metric.interface';

@Injectable()
export class AnalyticsService {

  constructor(private implementation: AnalyticsImplementation) { }

  public record(metric: Metric): void{
    this.implementation.recordEvent(metric);
  }
}
