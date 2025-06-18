import { pb } from "../main";

export function classNames(
  ...classes: (string | undefined | null | boolean)[]
): string {
  return classes.filter(Boolean).join(' ');
}
export function getUrl(record:any,name:string):string{
  return pb.files.getURL({ ...record }, name);
}