import type { ZodFormattedError } from "zod";

export default function ErrorMessage<S extends Record<string, any>>({
  errors,
  name,
}: {
  errors: ZodFormattedError<S> | undefined;
  name: string;
}) {
  return errors?.[name] ? (
    <ul>
      {errors[name]?._errors.map((error) => (
        <li key="error">
          <em className="text-red-600">{error}</em>
          <br />
        </li>
      ))}
    </ul>
  ) : (
    <span></span>
  );
}
