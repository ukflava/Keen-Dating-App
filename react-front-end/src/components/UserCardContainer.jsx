import UserCard from "./UserCard";
import NoUsersLeft from './NoUsersLeft';
import Preferences from './Preferences';

// Hook credit to @3DJakob on github 
import TinderCard from 'react-tinder-card';

const UserCardContainer = (props) => {

  // Helper to decide what to do after cards left
  const onCardLeftScreen = (id) => {
    console.log(id + ' left the screen')
  };

  // Helper to decide what happens when swiped left or right
  const onSwipe = (direction, id) => {
    if (direction === 'right') {
      props.swipeUser(id, true);
    } else if (direction === 'left') {
      props.swipeUser(id, false);
    }
  };



  //  Filter  users before mapping - import pref here
  
  const pref = props.preferences
  // console.log("prefd", pref)
  // console.log("users from mainb", props.users)

 let filteredUsers = props.users?.filter( a => {
    if (  
      a.drink_id === pref.drinks &&
      a.exercise_id === pref.exercises &&
      a.dating_goal_id === pref.dating_goals &&
      a.location.includes(pref.location) &&
      a.age >= pref.min_age &&
      a.age <= pref.max_age &&
      a.height_in_cm >= pref.min_height_in_cm &&
      a.height_in_cm <= pref.max_height_in_cm &&
      pref.genders === 3 ? a.gender_id : (a.gender_id === pref.gender_id)
      ) {
        return true
      }
      else return false
     

  })
  // console.log("filtered???", filteredUsers)

// shuffle 

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  

const shuffledData = shuffle(filteredUsers)

// then pass it to userCards - i didnt change userCards yet

  // Map over users and render profile cards
  const userCards = shuffledData.map((user) => {
    return (
      <TinderCard onSwipe={(direction) => onSwipe(direction, user.id)} onCardLeftScreen={() => onCardLeftScreen(user.id)} className="keen-tinder-card w-full rounded-xl drop-shadow-2xl" key={user.id}>
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
          photos={user.photos}
        />
      </TinderCard>
    )
  });

  // Render preferences page
  if (props.prefMode && (!props.profile && !props.editMode)) {
    return (
      <section className="user-card-container w-full place-content-center bg-white">
        <div className='keen-tinder-card w-full rounded-xl drop-shadow-2xl bg-white'>
          <Preferences    
            user={props.user}
            prefs={props.prefs}
            prefOptions={props.prefOptions}
            updatePreferences={props.updatePreferences}
          />
        </div>
      </section>
    );
  };

  // Render your profile
  if (props.profile && !props.editMode) {
    return (
      <section className="user-card-container w-full place-content-center">
        <div className="keen-tinder-card w-full rounded-xl drop-shadow-2xl">
          <UserCard 
            key={props.user.id}
            id={props.user.id}
            name={props.user.name}
            age={props.user.age}
            bio={props.user.bio}
            education={props.user.education}
            occupation={props.user.occupation}
            location={props.user.location}
            goal={props.user.goal}
            drinks={props.user.drinks}
            exercises={props.user.exercises}
            gender={props.user.gender}
            height={props.user.height_in_cm}
            isActive={props.user.is_active}
            photos={props.user.photos}
            profile={props.profile}
            editMode={props.editMode}
            updateProfile={props.updateProfile}
            currentProfile={props.user}
            prefOptions={props.prefOptions}
          />
        </div>
      </section>
    );
  };
  
  // Render other users
  return (
      <section className="user-card-container w-full place-content-center">
        {userCards?.length > 0 
          ? userCards
          : <NoUsersLeft user={props.user}/>
        }
      </section>
  );
};

export default UserCardContainer;