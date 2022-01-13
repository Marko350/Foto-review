import React from 'react'
import { useParams } from 'react-router'

const Review = () => {
    const { owner, id} = useParams()

    return (
        <div>
            Review page
        </div>
    )
}

export default Review
