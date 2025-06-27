import RESTAdapter from '@ember-data/adapter/rest';

export default class BaseAdapter extends RESTAdapter {
  query() {
    return {
      foos: [
        {
          id: 1,
          name: 'Foo 1',
        },
        {
          id: 2,
          name: 'Foo 2',
        },
      ],
    };
  }
}
