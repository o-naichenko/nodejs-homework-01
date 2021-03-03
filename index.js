const argv = require("yargs").argv;
const {
  addContact,
  getContactById,
  listContacts,
  removeContact,
} = require("./contacts");
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      await   listContacts();
      break;

    case "get":
      await getContactById(id);
      break;

    case "add":
      await addContact(name, email, phone);
      break;

    case "remove":
      removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
