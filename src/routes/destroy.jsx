import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function destroy({ params }) {
    throw Error('Oh dang!');
    // await deleteContact(params.contactId);
    // return redirect('/');
}

export default function DestroyContact() {
    return <></>;
}
