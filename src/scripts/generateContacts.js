import {createFakeContact} from "../utils/createFakeContact.js";


const generateContacts = async (number) => {
    const newSongs = Array(number).fill(0).map(createFakeContact);
};

generateContacts(5);
