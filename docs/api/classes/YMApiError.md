[yoomoney-sdk](../README.md) / [Exports](../modules.md) / YMApiError

# Class: YMApiError

Ошибка, которую выбрасывает API при ошибочном ответе от сервера

## Hierarchy

- `Error`

  ↳ **`YMApiError`**

## Table of contents

### Constructors

- [constructor](YMApiError.md#constructor)

### Properties

- [code](YMApiError.md#code)
- [message](YMApiError.md#message)
- [name](YMApiError.md#name)
- [response](YMApiError.md#response)
- [stack](YMApiError.md#stack)
- [prepareStackTrace](YMApiError.md#preparestacktrace)
- [stackTraceLimit](YMApiError.md#stacktracelimit)

### Methods

- [captureStackTrace](YMApiError.md#capturestacktrace)

## Constructors

### constructor

• **new YMApiError**(`response`)

Объект ответа

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `AnyRecord` |

#### Overrides

Error.constructor

#### Defined in

[src/api.ts:15](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/5f14ef9/src/api.ts#L15)

## Properties

### code

• **code**: `string`

#### Defined in

[src/api.ts:9](https://github.com/AlexXanderGrib/yoomoney-sdk/blob/5f14ef9/src/api.ts#L9)

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:973

___

### response

• **response**: `AnyRecord`

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:975

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4
