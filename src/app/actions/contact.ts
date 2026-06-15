"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  createContact,
  deleteContact,
  updateContact,
} from "../api/contact";
import { getSession } from "../_lib/session";

// Delete Contact
export async function deleteContactAction(
  prevstate: any,
  formData: FormData
) {
  const id = String(formData.get("id"));

  await deleteContact(id);

  revalidatePath("/contact");

  return {
    success: true,
  };
}
// Update Contact
export async function updateContactAction(
  formData: FormData
) {
  const id = String(formData.get("id"));

const contact = {
    id,
    name: String(formData.get("name")),
    email: String(formData.get("email")),
    phone: String(formData.get("phone")),
    company: String(formData.get("company")),
    address: String(formData.get("address")),
    notes: String(formData.get("notes")),
    userId: String(formData.get("userId")),
  };

  await updateContact(id, contact);

  revalidatePath("/contact");

  redirect("/contact");
}
// Create Contact
export async function createContactAction(
  formData: FormData
) {

  const user = await getSession();

  const contact = {
    name: String(formData.get("name")),
    email: String(formData.get("email")),
    phone: String(formData.get("phone")),
    company: String(formData.get("company")),
    address: String(formData.get("address")),
    notes: String(formData.get("notes")),
    userId: user?.id // replace with logged-in user id
  };

  await createContact(contact as any);

  revalidatePath("/contact");

  redirect("/contact");
}

// Get form data.
// Prepare object.
// Call API.
// Refresh data.
// Redirect user.