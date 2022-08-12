import { useParams } from "react-router-dom";
import UserCard from "./UserCard";

const UserProfile = (props) => {
  const params = useParams();

  if(!props.users) {
    return null;
  }
  
  const user = props.users.find(user => {
    return user.name === params.name
    // user.id.toString() === params.id
  })
  console.log("sdfsdfsd", user)
  console.log("useParams", params)
  if(!user){
    return null
  }

  return (
    <div className="keen-tinder-card w-full rounded-xl drop-shadow-2xl">
      <UserCard
        key={user.id}
        id={user.id}
        name={user.name}
        age={user.age}
        bio={user.bio}
        education={user.education}
        occupation={user.occupation}
        location={user.location}
        goal={user.goal}
        drinks={user.drinks}
        exercises={user.exercises}
        gender={user.gender}
        height={user.height_in_cm}
        isActive={user.is_active}
        photos={user.url}
      />
    </div>
  )

}

export default UserProfile;