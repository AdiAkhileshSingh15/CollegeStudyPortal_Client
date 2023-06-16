import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import HomeHelper from '../../Components/StudentHomeHelper'
import Footer from '../../Components/Footer'

const Home = () => {
    const { student, isAuthenticated } = useSelector((store) => store.student)
    const navigate = useNavigate()
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/')
        }
    })
    return (
        <div>
            {isAuthenticated ? <>
                <HomeHelper />
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-8 mt-5">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img className="card-img-top" src={student.student.avatar} alt="Card cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{student.student.name}</h5>
                                            <h5 className="card-title">{student.student.registrationNumber}</h5>
                                            <Link to='/student/updateProfile' className="btn btn-info">UPDATE PROFILE</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <table className="table border">
                                        <tbody>
                                            <tr>
                                                <td>Name</td>
                                                <td>{student.student.name}</td>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td>{student.student.email}</td>
                                            </tr>
                                            <tr>
                                                <td>Registration Number</td>
                                                <td>{student.student.registrationNumber}</td>
                                            </tr>
                                            <tr>
                                                <td>Date Of Birth</td>
                                                <td>{student.student.dob}</td>
                                            </tr>
                                            <tr>
                                                <td>Year</td>
                                                <td>{student.student.year}</td>
                                            </tr>
                                            <tr>
                                                <td>Department</td>
                                                <td>{student.student.department}</td>
                                            </tr>
                                            <tr>
                                                <td>Section</td>
                                                <td>{student.student.section}</td>
                                            </tr>
                                            <tr>
                                                <td>Batch</td>
                                                <td>{student.student.batch}</td>
                                            </tr>
                                            <tr>
                                                <td>Gender</td>
                                                <td>{student.student.gender ? student.student.gender :

                                                    "NA"
                                                }</td>
                                            </tr>
                                            <tr>
                                                <td>Contact Number</td>
                                                <td>{student.student.studentMobileNumber ?
                                                    student.student.studentMobileNumber : "NA"}</td>
                                            </tr>
                                            <tr>
                                                <td>Aadhar Card</td>
                                                <td>{student.student.aadharCard ? student.student.aadharCard : "NA"} </td>
                                            </tr>
                                            <tr>
                                                <td>Father Name</td>
                                                <td>{student.student.fatherName ? student.student.fatherName : "NA"}</td>
                                            </tr>
                                            <tr>
                                                <td>Father Contact Number</td>
                                                <td>{student.student.fatherMobileNumber ? student.student.fatherMobileNumber : "NA"}</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">

                        </div>

                    </div>
                </div>
                <Footer />
            </> : (navigate('/'))}
        </div>

    )
}

export default Home
