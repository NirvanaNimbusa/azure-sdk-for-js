## API Report File for "@azure/schema-registry-avro"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { SchemaRegistry } from '@azure/schema-registry';

// @public
export class SchemaRegistryAvroSerializer {
    constructor(registry: SchemaRegistry, schemaGroup: string, options?: SchemaRegistryAvroSerializerOptions);
    deserialize<T>(buffer: Buffer): Promise<T>;
    serialize(value: unknown, schema: string): Promise<Buffer>;
}

// @public
export interface SchemaRegistryAvroSerializerOptions {
    autoRegisterSchemas?: boolean;
}


// (No @packageDocumentation comment for this package)

```
