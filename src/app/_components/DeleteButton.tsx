"use client";

import { useActionState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { ContactType } from "../_types/Contact";

type DeleteButtonProps = {
  contact?: ContactType;
  action: (
    prevState: any,
    formData: FormData
  ) => Promise<any>;
};

const DeleteButton = ({
  contact,
  action,
}: DeleteButtonProps) => {
  const [, formAction] = useActionState(
    action,
    null
  );
  return (
    <form action={formAction}>
      <input
        type="hidden"
        name="id"
        value={contact?.id}
      />
      <button
        type="submit"
        onClick={(e) => {
          if (
            !confirm(
              "Are you sure you want to delete this contact?"
            )
          ) {
            e.preventDefault();
          }
        }}
      >
        <FiTrash2  className="text-red-500 text-lg"
        />
      </button>
    </form>
  );
};

export default DeleteButton;