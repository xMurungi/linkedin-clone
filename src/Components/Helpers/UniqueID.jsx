import { v4 as uuidv4 } from 'uuid';

export const  UniqueID = () => {
    let id = uuidv4();
    return id;
};
