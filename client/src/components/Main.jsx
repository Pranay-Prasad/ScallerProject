import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import hotel from '../assets/hotel.jpeg'
const Main = (props) => {
    const {Switch} = props;
    const [Price, setPrice] = useState(0);
    const [Selected,setSelected] = useState(0);
    const [Email,setEmail] = useState('');
  return (
    <div className='user-Main center' style={{display: Switch?'':'none'}}>
        {/* div where price cards are displayed */}
        <div className="rooms-Cat center">
            <div className="card" style={{width: "18rem"}}>
                <img src={hotel} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Price: 100</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, natus?</p>
                    <button className={`btn btn-${Selected == 1?'success':'primary'}`} onClick={()=>{setPrice(100);setSelected(1)}}>{Selected == 1?'Selected':'Select'}</button>
                </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
                <img src={hotel} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Price: 200</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, natus?</p>
                    <button className={`btn btn-${Selected == 2?'success':'primary'}`}onClick={()=>{setPrice(200);setSelected(2)}}>{Selected == 2?'Selected':'Select'}</button>
                </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
                <img src={hotel} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Price: 300</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, natus?</p>
                    <button className={`btn btn-${Selected == 3?'success':'primary'}`} onClick={()=>{setPrice(300);setSelected(3)}}>{Selected == 3?'Selected':'Select'}</button>
                </div>
            </div>
        </div>
        {/* div where input box are present */}
        <div className="information center">
            <div className="email">
            <label htmlFor="" name="email" placeholder='Enter email'>Email</label>
            <input type="text"  />
            </div>
            <div className="room-time">
                <label htmlFor="">Time</label>
                <input type="text"  />
                <input type="text"  />
            </div>
            <div className="bill">
                <span>{Price}</span>
                <span>Offer</span>
                <button type="button" className="btn btn-success btn-lg">Book Now</button>
            </div>
        </div>
    </div>
  )
}

export default Main