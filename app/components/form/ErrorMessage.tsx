import type { ZodFormattedError } from "zod";

export function ErrorMessage({error}: {error: string}){
  
  return (
    <li>
      <em className="text-red-600">{error}</em>
      <br />
    </li>
  )
}

export default function ErrorMessages<S extends Record<string, any>>({
  errors,
  name,
}: {
  errors: ZodFormattedError<S> | undefined;
  name: string;
}) {
  return errors?.[name] ? (
    <ul>
      {errors[name]?._errors.map((error) => (
        <ErrorMessage key={error} error={error} />
      ))}
    </ul>
  ) : (
    <span></span>
  );
}
