import { useId, type ChangeEventHandler } from "react";

type FormFieldProps = {
  name: string;
  label: string;
  placeholder: string;
  type?: "text" | "email";
  autoComplete?: string;
  multiline?: boolean;
  error?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

const fieldClassName =
  "w-full rounded-lg border bg-cream px-4 text-sm leading-6 text-ink placeholder:text-subtle transition-colors focus:border-brand focus:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/30";

export function FormField({
  name,
  label,
  placeholder,
  type = "text",
  autoComplete,
  multiline = false,
  error,
  onChange,
}: FormFieldProps) {
  const id = useId();
  const errorId = `${id}-error`;
  const stateClassName = error ? "border-coral" : "border-line";
  const sharedProps = {
    id,
    name,
    placeholder,
    required: true,
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? errorId : undefined,
    onChange,
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm leading-6 font-bold text-ink">
        {label}
      </label>
      {multiline ? (
        <textarea
          {...sharedProps}
          rows={4}
          className={`${fieldClassName} ${stateClassName} h-[100px] resize-none py-3.5 lg:h-[120px]`}
        />
      ) : (
        <input
          {...sharedProps}
          type={type}
          autoComplete={autoComplete}
          className={`${fieldClassName} ${stateClassName} h-12 py-3`}
        />
      )}
      {error && (
        <p id={errorId} className="text-sm leading-5 text-[#c2410c]">
          {error}
        </p>
      )}
    </div>
  );
}
