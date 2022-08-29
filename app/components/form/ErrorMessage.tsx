import type { ZodFormattedError } from "zod";
import type { Skill } from "~/models/skills.server";

export default function ErrorMessage<S extends Record<string, any>>({
  errors,
  name,
}: {
  errors: ZodFormattedError<S> | undefined;
  name: keyof Skill;
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
