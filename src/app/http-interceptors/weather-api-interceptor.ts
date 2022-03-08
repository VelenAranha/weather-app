import { Injectable } from '@angular/core'
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpParams,
} from '@angular/common/http'

import { Observable } from 'rxjs'

/**
 * Pass untouched request through to the next request handler.
 * Immutable pattern
 * */
@Injectable()
export class WeatherApiInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const reqParams = req.params
    const params = reqParams.set('appid', '027381237e338fcc89e162d22bab7edc')

    const dup = req.clone({ params })

    return next.handle(dup)
  }
}
