/// <reference types="react-scripts" />

declare type IErrors = { [key: string]: string } | string;

declare interface IActionType<Payload> {
  type: string;
  payload: Payload;
}
