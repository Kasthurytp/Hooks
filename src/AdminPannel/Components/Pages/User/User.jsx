import React from 'react'
import './User.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StorefrontIcon from '@mui/icons-material/Storefront';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PublishIcon from '@mui/icons-material/Publish';

export default function User() {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className='userTitle'>Edit User</h1>
            <button className="userAddButton">Save</button>
        </div>

        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://res.cloudinary.com/do9kzlzo0/image/upload/v1652463206/Hooks/pexels-pixabay-219794_hhr9ow.jpg" alt="" className="userShowImg" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Kasthury</span>
                        <span className="userShowUserAddress">Chavakachcheri</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                     <div className="userShowInfo">
                        <PermIdentityIcon className='userShowIcon'/>
                        <span className="userShowInfoTitle">Kasthury</span>
                    </div>

                    <div className="userShowInfo">
                        <PhoneAndroidIcon className='userShowIcon'/>
                        <span className="userShowInfoTitle">071 287 4444</span>
                    </div>

                    <div className="userShowInfo">
                        <LocationOnIcon className='userShowIcon'/>
                        <span className="userShowInfoTitle">Jaffna, Sri Lanka</span>
                    </div>


                    <div className="userShowInfo">
                        <MailOutlineIcon className='userShowIcon'/>
                        <span className="userShowInfoTitle">testing@gmail.com</span>
                    </div>

                    <div className="userShowInfo">
                        <StorefrontIcon className='userShowIcon'/>
                        <span className="userShowInfoTitle">Shop 1</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>User name</label>
                            <input type="text" placeholder='Kasthury' className='userUpdateInput'/>
                        </div>

                        <div className="userUpdateItem">
                            <label>Phone number</label>
                            <input type="text" placeholder='071 287 4444' className='userUpdateInput'/>
                        </div>

                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input type="text" placeholder='Jaffna, Sri Lanka' className='userUpdateInput'/>
                        </div>

                        <div className="userUpdateItem">
                            <label>E mail</label>
                            <input type="text" placeholder='testing@gmail.com' className='userUpdateInput'/>
                        </div>

                        <div className="userUpdateItem">
                            <label>Business Name</label>
                            <input type="text" placeholder='Shop 1' className='userUpdateInput'/>
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src="https://res.cloudinary.com/do9kzlzo0/image/upload/v1652463206/Hooks/pexels-pixabay-219794_hhr9ow.jpg" className='userUpdateImg' alt="" />
                            <label htmlFor="file"><PublishIcon className='userUpdateIcon'/></label>
                            <input type="file" id="file" style={{display:"none"}}/>
                        </div>
                        <button className='userUpdateButton'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
