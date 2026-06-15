import { getContactById } from "@/app/api/contact";
import { updateContactAction } from "@/app/actions/contact";

type EditContactPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const EditContactPage = async ({
  params,
}: EditContactPageProps) => {
  // Get contact id from URL
  const { id } = await params;

  // Fetch contact details
  const contact = await getContactById(id);

  return (
    <div className="max-w-md mx-auto mt-8">
      {/* Page title */}
      <h1 className="text-3xl font-bold mb-6">
        Edit Contact
      </h1>

      {/* Edit form */}
      <form
        action={updateContactAction}
        className="space-y-4"
      >
        {/* Hidden fields */}
        <input
          type="hidden"
          name="id"
          value={contact.id}
        />

        <input
          type="hidden"
          name="userId"
          value={contact.userId}
        />

        {/* Name */}
        <div>
          <label className="block mb-1 font-medium">
            Name
          </label>
          <input
            type="text"
            name="name"
            defaultValue={contact.name}
            className="w-full border rounded p-2"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            defaultValue={contact.email}
            className="w-full border rounded p-2"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-1 font-medium">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            defaultValue={contact.phone}
            className="w-full border rounded p-2"
            required
          />
        </div>

        {/* Company */}
        <div>
          <label className="block mb-1 font-medium">
            Company
          </label>
          <input
            type="text"
            name="company"
            defaultValue={contact.company}
            className="w-full border rounded p-2"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block mb-1 font-medium">
            Address
          </label>
          <input
            type="text"
            name="address"
            defaultValue={contact.address}
            className="w-full border rounded p-2"
          />
        </div>

        {/* Notes */}
        <div>
          <label className="block mb-1 font-medium">
            Notes
          </label>
          <textarea
            name="notes"
            defaultValue={contact.notes}
            className="w-full border rounded p-2"
            rows={4}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Update Contact
        </button>
      </form>
    </div>
  );
};

export default EditContactPage;