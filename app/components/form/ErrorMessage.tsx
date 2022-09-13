import type { SafeParseError } from 'zod';

export function ErrorMessage({ error }: { error: string | undefined }) {
	return (
		<li>
			<em className="text-red-600">{error}</em>
			<br />
		</li>
	);
}

export type FieldErrors<S> = Partial<Record<keyof S, string[] | undefined>>;

export default function ErrorMessages<S extends Record<string, any>>({
	errors,
	name,
}: {
	errors: FieldErrors<S> | undefined;
	name: string;
}) {
	return errors?.[name] ? (
		<ul>
			{errors[name]?.map(
				(error) => (
					<ErrorMessage key={error} error={error} />
				),
			)}
		</ul>
	) : (
		<span />
	);
}

export function getFieldErrors<S extends Record<string, any>>(
	result: SafeParseError<S>,
) {
	return result.error.formErrors.fieldErrors;
}
