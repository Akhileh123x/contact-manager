
import Link from "next/link";
import { ContactType } from "../_types/Contact";
import DeleteButton from "./DeleteButton";
import { FiEdit } from "react-icons/fi";
import { deleteContactAction } from "../actions/contact";

// Define props type
type ContactListProps = {
  contacts: ContactType[];
};

const ContactList = ({ contacts }: ContactListProps) => {
  return (
    <div>
      {/* Page heading and Add Contact button */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Contact List
        </h1>

        <Link
          href="/contact/new"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Contact
        </Link>
      </div>

      {/* Display all contacts */}
      <div className="space-y-4">
        {contacts.map((contact) => (
          <div
            key={contact.id} // Unique key for React
            className="border rounded-lg p-4 shadow"
          >
            {/* Contact name */}
            <h2 className="text-xl font-bold">
              {contact.name}
            </h2>

            {/* Contact details */}
            <p>
              <strong>Email:</strong> {contact.email}
            </p>

            <p>
              <strong>Phone:</strong> {contact.phone}
            </p>

            <p>
              <strong>Company:</strong> {contact.company}
            </p>

            <p>
              <strong>Address:</strong> {contact.address}
            </p>

            <p>
              <strong>Notes:</strong> {contact.notes}
            </p>

            {/* Action buttons */}
            <div className="mt-3 flex gap-5">
              <Link
                href={`/contact/edit/${contact.id}`}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                <FiEdit />
                Edit
              </Link>

              <DeleteButton
                contact={contact}
                action={deleteContactAction}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;