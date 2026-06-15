import ContactList from "../_components/ContactList";
import { getSession } from "../_lib/session";
import { getContacts } from "../api/contact";

const ContactPage = async () => {
  // Get logged-in user from session
  const user = await getSession();

  // If user is not logged in, show login link
  if (!user) {
    return (
      <div>
        Please{" "}
        <a
          href="/login"
          className="text-blue-600 hover:underline"
        >
          Login
        </a>{" "}
        to view your contacts
      </div>
    );
  }

  // Fetch contacts belonging to the current user
  const contacts = await getContacts(String(user.id));

  // Show message when user has no contacts
  if (!contacts || contacts.length === 0) {
    return (
      <div>
        Please{" "}
        <a
          href="/contact/new"
          className="text-blue-600 hover:underline"
        >
          Add a Contact
        </a>{" "}
        to get started.
      </div>
    );
  }

  // Render contact list when contacts exist
  return <ContactList contacts={contacts} />;
};

export default ContactPage;