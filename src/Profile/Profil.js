import PropTypes from 'prop-types'
const Profile=({fullName,bio,profession,children,handleHello})=>{

    return(
        <div className="pasha">
            {
                children
            }
            <h1>my name is {fullName}</h1>
            <h2>I am {bio} and I am {profession}</h2>
            <button className='nn' onClick={()=>handleHello(fullName)}>Hello</button>
        </div>
    )
}
Profile.defaultProps={
    fullName : "GOMYCODE",
    age : 99
}
Profile.propTypes = {
    fullName: PropTypes.string
}



export default Profile