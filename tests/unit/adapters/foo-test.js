import { setupTest } from 'example/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Adapter | foo', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const adapter = this.owner.lookup('adapter:foo');
    assert.ok(adapter, 'adapter exists');
  });
});
