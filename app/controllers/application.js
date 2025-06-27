import Controller from '@ember/controller';
import { load } from 'ember-async-data';
import { cached } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service store;

  // @cached
  // get foos() {
  //   return load(this.store.query('foo', { perPage: 2 }));
  // }

  get foos() {
    console.log('evaluating foos');
    return this.store.query('foo', { perPage: 2 });
  }
}
