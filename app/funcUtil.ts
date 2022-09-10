export const id: <T>(data: T) => T = (data) => data;

export function count<T>(arr: Iterable<T>, predicate: (item: T) => boolean){
  let result = 0;
  for (const item of arr){
    if(predicate(item)){
      result += 1;
    }
  }
  return result;
}