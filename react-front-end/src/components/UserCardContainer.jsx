// import { useState, useEffect } from 'react';
// import { useLocation, withRouter } from "react-router-dom";
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



    const pref = props.preferences
  
  // I know that code is not DRY - but i cannot use 2 ternary operatiors and && symbols in 1 conditional
  let filteredUsers = props.users?.filter( a => {
    if ( pref.dating_goals !== 1 ? (  
         a.drink_id === pref.drinks &&
         a.dating_goal_id === pref.dating_goals &&
         a.exercise_id === pref.exercises &&
         a.location.includes(pref.location) &&
         a.age >= pref.min_age &&
         a.age <= pref.max_age &&
         a.height_in_cm >= pref.min_height_in_cm &&
         a.height_in_cm <= pref.max_height_in_cm
        
                  ):
 
 // if dating_goal === 1 show all prefs
         (
      
       a.drink_id === pref.drinks &&
       a.exercise_id === pref.exercises &&
       a.location.includes(pref.location) &&
       a.age >= pref.min_age &&
       a.age <= pref.max_age &&
       a.height_in_cm >= pref.min_height_in_cm &&
       a.height_in_cm <= pref.max_height_in_cm
               )
      ) {
         return true
       }
       else return false
   });

   let filteredWithGender = filteredUsers?.filter( a => {
    if ( pref.genders !== 3 ? a.gender_id === pref.genders : a.gender_id)
    {return true}
    else return false
   })

    console.log("pref", pref)
   console.log("filter", filteredUsers)
 
  const userCards = filteredWithGender?.map((user) => {
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