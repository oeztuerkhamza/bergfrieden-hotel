import { Pipe, PipeTransform, inject } from '@angular/core';
import { LangService } from './lang.service';
import { TKey } from './i18n';

/**
 * Translation pipe. Usage: `{{ 'nav.home' | t }}`.
 *
 * Marked `pure: false` so it re-evaluates when the underlying lang signal changes.
 * The lookup itself is O(depth-of-key) ≈ 3 hops, so the cost is negligible even
 * across hundreds of bindings.
 */
@Pipe({ name: 't', pure: false })
export class TPipe implements PipeTransform {
  private langSvc = inject(LangService);
  transform(key: TKey): string {
    return this.langSvc.t(key);
  }
}
