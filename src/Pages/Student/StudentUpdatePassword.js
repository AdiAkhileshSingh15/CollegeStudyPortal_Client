import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import classnames from 'classnames'
import HomeHelper from '../../Components/StudentHomeHelper'




const StudentUpdatePassword = () => {
    const store = useSelector((store) => store)
    const navigate = useNavigate()
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState({})

    const url = "https://collegeapi.onrender.com"
    
    useEffect(() => {
        if (store.errorHelper) {
            setError(store.errorHelper)
            console.log(store.errorHelper)
        }
    }, [store.errorHelper])

    const formHandler = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const pswdData = { registrationNumber: store.student.student.student.registrationNumber, oldPassword, newPassword, confirmNewPassword }
        const response = await fetch(`${url}/student/updatePassword`, {
            method: 'POST',
            body: JSON.stringify(pswdData),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${JSON.parse(localStorage.getItem('studentJwtToken'))}`
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json)
            setIsLoading(false)
            setOldPassword('')
            setNewPassword('')
            setConfirmNewPassword('')
        }
        if (response.ok) {
            setError({})
            setIsLoading(false)
            setOldPassword('')
            setNewPassword('')
            setConfirmNewPassword('')
            alert("Password Updated Successfully")
        }
    }
    return (
        <div>
            {store.student.isAuthenticated ? <>
                <HomeHelper />
                <div className="container m-5">
                    <div className="row m-5">
                        <div className="col-md-5 m-auto">
                            <form noValidate onSubmit={formHandler}>
                                <div className="form-group">
                                    <label htmlFor="emailId">Old Password</label>
                                    <input onChange={(e) => setOldPassword(e.target.value)} type="password" value={oldPassword} className={classnames("form-control",
                                        {
                                            'is-invalid': error.oldPassword

                                        })} id="emailId" />
                                    {error.oldPassword && (<div className="invalid-feedback">{error.oldPassword}</div>)}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="passwordId">New Password</label>
                                    <input onChange={(e) => setNewPassword(e.target.value)} value={newPassword} className={classnames("form-control", {
                                        "is-invalid": error.newPassword
                                    })} type="password" id="passwordId" />
                                    {error.newPassword && (<div className="invalid-feedback">{error.newPassword}</div>)}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="passwordCId">Confirm New Password</label>
                                    <input onChange={(e) => setConfirmNewPassword(e.target.value)} value={confirmNewPassword} className={classnames("form-control", {
                                        "is-invalid": error.confirmNewPassword
                                    })} type="password" id="passwordCId" />
                                    {error.confirmNewPassword && (<div className="invalid-feedback">{error.confirmNewPassword}</div>)}
                                </div>
                                {!isLoading && <button type="submit" class="btn btn-info btn-block ">Update Password</button>}
                                {
                                    isLoading && <div className="spinner-border text-primary" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                }
                            </form>
                        </div>
                    </div>
                </div></> : (navigate('/'))}



        </div>
    )
}

export default StudentUpdatePassword
