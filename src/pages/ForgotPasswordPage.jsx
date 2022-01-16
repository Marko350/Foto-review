import React, { useRef } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useAuthContext } from '../contexts/AuthContext'

const ForgotPasswordPage = () => {
    const { resetPassword } = useAuthContext()
	const inputRef = useRef()

	const handleSubmit = async e => {
		e.preventDefault();

		try {
			await resetPassword(inputRef.current.value);
		} catch (error){
			console.log(error);
		}
		inputRef.current.value = "";
	}

	return (
		<div>
			<h1>Reset password</h1>
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-2">
					<Form.Label>E-mail adress:</Form.Label>
					<Form.Control type="text" ref={inputRef} />
				</Form.Group>
				<Button type="submit" variant="success">Submit</Button>
			</Form>
		</div>
	)
}

export default ForgotPasswordPage
