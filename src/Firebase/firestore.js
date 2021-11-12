import firebase, { db } from "./firebase";
import {
  collection,
  getDocs,
  getDoc,
  query,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
  setDoc,
} from "firebase/firestore";

// ESCRITURA
export const escribirDatos = async (coleccion, documento, data) => {
  await setDoc(doc(db, coleccion, documento), data);
};

// LECTURA DE ACCESOS
export const verificarAcceso = async (coleccion, documento, dataLogin) => {
  const UIDocente = await getDoc(doc(db, coleccion, documento));

  if (UIDocente.exists()) {
    console.log("Documento existe:", UIDocente.data());
  } else {
    const emailDeAcceso = await getDoc(doc(db, 'accesos', dataLogin.email));
    if (emailDeAcceso.exists()) {
        escribirDatos('docentes', documento, {
            nombre: dataLogin.displayName,
            email: dataLogin.email
        })
        console.log('Regsitrado')
    } else {
      alert('Acceso denegado, tu correo no se encuetra registrado')
    }
  }
  await getDocs(query(collection(db, "persons")));
};
// // ELIMINACIÓN
// await deleteDoc(doc(db, 'persons', id));

// // ACTUALIZACIÓN
// await updateDoc(doc(db, 'persons', id), {name})
