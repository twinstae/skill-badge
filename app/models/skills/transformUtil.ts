export function flatMultiLink(transform: (item: any) => any){
  return (name: string) => (item: any) => ({
    ...item,
    [name]: item[name].map(transform)
  })
}

export const flatSlug = (e: any) => e.slug;
export const flatSlugs = flatMultiLink(flatSlug)