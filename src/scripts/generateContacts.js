import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (count) => {
  const contacts = await readContacts();
  const newContacts = Array.from({ length: count }, createFakeContact);

  const updatedContacts = [...contacts, ...newContacts];
  await writeContacts(updatedContacts);

  return newContacts;
};
generateContacts(5);
