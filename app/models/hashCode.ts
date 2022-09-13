export function hashCode(s: string) {
	let hash = 0;
	let i;
	let chr;
	if (s.length === 0) { return hash; }
	for (i = 0; i < s.length; i++) {
		chr = s.charCodeAt(i);
		hash = (hash << 5) - hash + chr;
		hash |= 0; // Convert to 32bit integer
	}
	return hash;
}
