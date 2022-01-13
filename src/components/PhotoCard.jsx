import React from 'react'
import { Card } from "react-bootstrap"
import { usePhotoContext } from '../contexts/PhotoContext'

const PhotoCard = ({ photo }) => {
    const { chosenPhotos, setChosenPhotos } = usePhotoContext()


    const handlePhoto = (e) => {
        e.stopPropagation()
        if(!chosenPhotos.includes(photo)) {
            setChosenPhotos(prev => [...prev, photo])
        } else { 
            setChosenPhotos(prev => prev.filter(current => current !== photo))
        }
    }

    return (
        <div>
            <div>
                <input onClick={handlePhoto} type="checkbox" /> 
            </div>
            <Card className="photo-card">
                <Card.Header>
                    <p className="photo-name" title={photo.name}>
                        {photo.name}
                    </p>
                </Card.Header>

                <a href={photo.url}>
                    <Card.Img variant="top" src={photo.url} title={photo._id} />
                </a>
            </Card>
        </div>
    )
}

export default PhotoCard
