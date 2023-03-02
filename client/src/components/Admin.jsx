import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Book from './Modal/Book'
import Edit from './Modal/Edit';
const Admin = (props) => {
    const {Switch} = props;
  return (
    <div className='Admin-Main center' style={{display: Switch?'none':''}}>
        <div className="table-holder">
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Email</th>
                    <th scope="col">Time</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark@gmail.com</td>
                    <td>10-12</td>
                    <td>
                        <div className="action-btns center">
                            <Book/>
                            <Edit/>
                            <button type="button" className="btn btn-danger">Delete</button>
                        </div>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark@gmail.com</td>
                    <td>10-12</td>
                    <td>
                        <div className="action-btns center">
                            <Book/>
                            <Edit/>
                            <button type="button" className="btn btn-danger">Delete</button>
                        </div>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark@gmail.com</td>
                    <td>10-12</td>
                    <td>
                        <div className="action-btns center">
                            <Book/>
                            <Edit/>
                            <button type="button" className="btn btn-danger">Delete</button>
                        </div>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    </div>
  )
}

export default Admin