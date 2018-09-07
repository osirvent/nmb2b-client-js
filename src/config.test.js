/**
 * @jest-environment node
 * @flow
 */
import { getEndpoint, getFileUrl, getFileEndpoint } from './config';

describe('getEndpoint', () => {
  test('without flavour', () => {
    // $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/2658
    expect(getEndpoint()).toMatchInlineSnapshot(
      `"https://www.b2b.nm.eurocontrol.int/B2B_OPS/gateway/spec/22.0.0"`,
    );
  });

  test('with flavour', () => {
    // $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/2658
    expect(getEndpoint({ flavour: 'OPS' })).toMatchInlineSnapshot(
      `"https://www.b2b.nm.eurocontrol.int/B2B_OPS/gateway/spec/22.0.0"`,
    );
  });
});

describe('getFileEndpoint', () => {
  test('without flavour', () => {
    // $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/2658
    expect(getFileEndpoint()).toMatchInlineSnapshot(
      `"https://www.b2b.nm.eurocontrol.int/FILE_OPS/gateway/spec"`,
    );
  });

  test('with flavour', () => {
    // $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/2658
    expect(getFileEndpoint({ flavour: 'OPS' })).toMatchInlineSnapshot(
      `"https://www.b2b.nm.eurocontrol.int/FILE_OPS/gateway/spec"`,
    );
  });
});

describe('getFileUrl', () => {
  test('without flavour', () => {
    // $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/2658
    expect(getFileUrl('bla')).toMatchInlineSnapshot(
      `"https://www.b2b.nm.eurocontrol.int/FILE_OPS/gateway/spec/bla"`,
    );
  });

  test('with flavour', () => {
    // $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/2658
    expect(getFileUrl('bla', { flavour: 'OPS' })).toMatchInlineSnapshot(
      `"https://www.b2b.nm.eurocontrol.int/FILE_OPS/gateway/spec/bla"`,
    );
  });

  test('with leading slash', () => {
    // $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/2658
    expect(getFileUrl('/bla')).toMatchInlineSnapshot(
      `"https://www.b2b.nm.eurocontrol.int/FILE_OPS/gateway/spec/bla"`,
    );
  });
});
