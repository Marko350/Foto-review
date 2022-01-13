import { useAuthContext } from "../contexts/AuthContext";
import { db } from "../firebase";
import { collection, doc, addDoc, serverTimestamp, arrayUnion, writeBatch } from "firebase/firestore"

const useCreateAlbum = () => {

    const { currentUser } = useAuthContext();

    const addAlbumToPhotos = async (albumId, photos = []) => {
        if (!photos.length) return 
    
        const batch = writeBatch(db)
    
        photos.forEach(photo => {
          const photoRef = doc(db, 'photos', photo.id)
          batch.update(photoRef, { 'albums': arrayUnion(albumId)})
        })
    
        await batch.commit()
      } 

    
    const createAlbum = async ( albumName, owner = null, original = true , photos = [], reviewedBy = null, thumbnail = null) => {
        const collectionRef = collection(db, "albums");
        try {
            
            const newAlbum = await addDoc(collectionRef, {
                created: serverTimestamp(),
                name: albumName,
                owner: !owner ? currentUser.uid : owner,
                thumbnail,
                original,
                viewed: original ? true : false,
                reviewedBy,
            })

            if(photos.length) {
                await addAlbumToPhotos(newAlbum.id, photos)
            }

            console.log("New folder is created")
            return newAlbum
        } catch (e) {
            console.log("Error! New folder was not created.")
            console.log(e.message)
        }
    }  


    return {
        createAlbum
    }

}

export default useCreateAlbum;