import { createContactAction } from "@/app/actions/contact";

const NewContactPage = () => {
  return (
    <div className="max-w-md mx-auto mt-8">
      {/* Page title */}
      <h1 className="text-3xl font-bold mb-6">
        Add New Contact
      </h1>

      {/* Contact form */}
      <form
        action={createContactAction}
        className="space-y-4"
      >
        {/* Name */}
        <div>
          <label className="block mb-1 font-medium">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
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
            placeholder="Enter email"
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
            placeholder="Enter phone number"
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
            placeholder="Enter company"
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
            placeholder="Enter address"
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
            placeholder="Enter notes"
            className="w-full border rounded p-2"
            rows={4}
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default NewContactPage;