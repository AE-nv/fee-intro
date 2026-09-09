import { useState } from "react";
import { Field } from "@/components/Field";
import { RadioPill } from "@/components/RadioPill";
import type { Cut, OrderDetails } from "@/components/ShoppingCartProvider";

type Errors = Partial<Record<keyof OrderDetails, string>>;

function validate(details: OrderDetails): Errors {
  const errors: Errors = {};

  if (!details.name.trim()) {
    errors.name = "Vul je naam in.";
  }
  if (!details.phone.trim()) {
    errors.phone = "Vul een telefoonnummer in.";
  }
  if (!details.email.trim()) {
    errors.email = "Vul een e-mailadres in.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email)) {
    errors.email = "Dat lijkt geen geldig e-mailadres.";
  }

  return errors;
}

const cutOptions = [
  { value: "whole", label: "Heel laten" },
  { value: "half", label: "In twee" },
] as const;

type Props = {
  /** The submit button lives outside this form and points at this id. */
  id: string;
  /** Called with the filled-in details, only once they pass validation. */
  onSubmit: (details: OrderDetails) => void;
};

export function OrderForm({ id, onSubmit }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [remark, setRemark] = useState("");
  const [cut, setCut] = useState<Cut>("whole");
  const [errors, setErrors] = useState<Errors>({});

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const details: OrderDetails = { name, phone, email, remark, cut };

    const errors = validate(details);
    setErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }

    onSubmit(details);
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-6 rounded-2xl border border-stone-200 bg-white p-6 lg:p-7"
    >
      <div>
        <h1 className="text-2xl font-black lg:text-3xl">Voor wie is het?</h1>
        <p className="mt-1 text-sm text-stone-500">
          We brengen het tot op je bureau.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Naam"
          name="name"
          placeholder="Jan Duivels"
          value={name}
          error={errors.name}
          onChange={setName}
        />
        <Field
          label="Telefoon"
          name="phone"
          type="tel"
          placeholder="0470 12 34 56"
          value={phone}
          error={errors.phone}
          onChange={setPhone}
        />
        <Field
          label="E-mail"
          name="email"
          type="email"
          placeholder="jan@duivels.be"
          value={email}
          error={errors.email}
          onChange={setEmail}
        />
      </div>

      <Field
        label="Opmerking"
        name="remark"
        multiline
        rows={3}
        placeholder="Geen augurk, extra pikant…"
        value={remark}
        onChange={setRemark}
      />

      <fieldset className="flex flex-col gap-2.5">
        <legend className="mb-2.5 text-xs font-black tracking-wider text-stone-700 uppercase">
          Broodje snijden
        </legend>
        <div className="flex gap-2.5">
          {cutOptions.map((option) => (
            <RadioPill
              key={option.value}
              name="cut"
              value={option.value}
              checked={cut === option.value}
              onChange={() => setCut(option.value)}
            >
              {option.label}
            </RadioPill>
          ))}
        </div>
      </fieldset>
    </form>
  );
}
