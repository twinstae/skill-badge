export function flatMultiLink(transform: (item: any) => any) {
	return (name: string) => (item: any) => ({
		...item,
		[name]: item[name].map(transform),
	});
}

export function flatLink(transform: (item: any) => any) {
	return (name: string) => (item: any) => ({
		...item,
		[name]: transform(item[name]),
	});
}

export const selectSlug = (e: any) => e.slug;
export const flatSlugs = flatMultiLink(selectSlug);
