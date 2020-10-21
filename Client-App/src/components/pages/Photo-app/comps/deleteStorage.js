import { projectFirestore } from '../firebase/config';

export default function deleteStorage({id, collection}) {
    projectFirestore
      .collection(collection)
      .doc(id)
      .delete()

}
