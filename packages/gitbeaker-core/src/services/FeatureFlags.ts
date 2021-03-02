import { BaseService } from '@gitbeaker/requester-utils';
import { BaseRequestOptions, PaginatedRequestOptions, RequestHelper } from '../infrastructure';

export class FeatureFlags<C extends boolean = false> extends BaseService<C> {
  all(options?: PaginatedRequestOptions<'keyset' | 'offset'>) {
    return RequestHelper.get()(this, 'features', options);
  }

  set(name: string, options?: BaseRequestOptions) {
    const encodedName = encodeURIComponent(name);

    return RequestHelper.post()(this, `features/${encodedName}`, options);
  }
}
