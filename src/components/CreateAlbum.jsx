import React, { useRef, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { usePhotoContext } from '../contexts/PhotoContext'
import useCreateAlbum from '../hooks/useCreateAlbum'
import { useNavigate } from 'react-router-dom'

const CreateAlbum = ({ title, album}) => {
    const inputRef = useRef()
    const navigate = useNavigate()
    const { createAlbum } = useCreateAlbum();
    const { chosenPhotos, setChosenPhotos } = usePhotoContext()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!inputRef.current.value) {
            return
        }
        if(album) {
            if(!chosenPhotos.length) {
                return
            }
            //create album from previous album
            const newAlbum =  await createAlbum(inputRef.current.value, album.owner, true, chosenPhotos, null, album.thumbnail)
            inputRef.current.value = "";
            navigate(`/albums/${newAlbum.id}`)
            return
        }

        //create empty album
        createAlbum(inputRef.current.value);
        inputRef.current.value = "";
    }

    useEffect(() => {
        return () => {
          setChosenPhotos([])
        }
      }, [])

    return (
        <div>
            <Form className="create-album" onSubmit={handleSubmit}>

                <Form.Group id="album" className="mb-3">
                        <Form.Label>{ title }</Form.Label>
                        <Form.Control type="text" ref={inputRef} required />
                </Form.Group>

                <Button type="submit">Create</Button>
            </Form>
        </div>
    )
}

export default CreateAlbum
