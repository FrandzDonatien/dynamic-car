import {ɵTypedOrUntyped, AbstractControl } from "@angular/forms";

export function getResult(f: ɵTypedOrUntyped<any, any, Record<string, AbstractControl>>) : Record<string, string>{
  const result: Record<string, string> = {};
  Object.keys(f).forEach((field: string) =>{
    result[field] = f[field].value;
  })
  return result;
}