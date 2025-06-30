import Controller from '@ember/controller';
import { getPromiseState } from '@warp-drive/ember';
import { cached } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service store;

  @cached
  get foos() {
    return getPromiseState(this.store.query('foo', { perPage: 2 }));
  }
}
