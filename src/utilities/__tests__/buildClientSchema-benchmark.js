// @flow strict

import { bigSchemaIntrospectionResult } from '../../__fixtures__';

import { buildClientSchema } from '../buildClientSchema';

export const name = 'Build Schema from Introspection';
export function measure() {
  buildClientSchema(bigSchemaIntrospectionResult.data, { assumeValid: true });
}
