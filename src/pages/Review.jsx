import React, { useRef, useState } from 'react'
import { useParams } from 'react-router'
import usePhotos  from "../hooks/usePhotos"
import PhotosGrid from "../components/PhotosGrid"
import { usePhotoContext } from "../contexts/PhotoContext"
import { Button } from "react-bootstrap"
import useCreateAlbum from '../hooks/useCreateAlbum'
import useAlbum from "../hooks/useAlbum"

const Review = () => {
    const { id } = useParams()
    const photos = usePhotos(id)
    const nameRef = useRef()
    const [message, setMessage] = useState()
    const [reviewSend, setReviewSend] = useState(null)
    const create = useCreateAlbum()
    const album = useAlbum(id)
    const { notChosenPhotos, chosenPhotos} = usePhotoContext()

    const handleReview = (e) => {
        e.preventDefault()
        if(photos.data && photos.data.length !== (notChosenPhotos.length + chosenPhotos.length)) {
            setMessage(true)
            setTimeout(() => {
                setMessage(false)
            }, 5000)
        } else {
            const reviewName = nameRef.current.value
            create.createAlbum(album.data.name, album.data.owner, chosenPhotos, reviewName, album.data.thumbnail )
            setReviewSend(true)
        }
    }

    return (
        <div>
            { !reviewSend && <>
            { photos.data && <PhotosGrid query={photos}  review={true}/> }
           <form onSubmit={ handleReview }>
            <label htmlFor="name">Your name:</label>
            <input type="text" name="name" ref={ nameRef } required />
            <Button type="submit">Send review</Button>
           </form>
           <div className="summary">
            <p>Accepted photos:</p>
            {chosenPhotos.length} / {photos.data.length}
           </div>
           <div className="summary">
            <p>Rejected photos:</p>
            {notChosenPhotos.length} / {photos.data.length}
           </div>
           { message ? <p style={{marginTop: "2rem"}}>You need to approve or reject every photo!</p> : null }
           </>}
           { reviewSend && <div className="review-submited">
               <h1>Review sended!</h1>
                <h2>Thank you!</h2>
            </div> }
        </div>
    )
}

export default Review
