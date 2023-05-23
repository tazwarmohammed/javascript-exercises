const findTheOldest = function(people) {

    // const thisYear = new Date().getFullYear();
    // let maxAge = 0, age = 0, obj;

    // for (const person of people) {
    //     if(('yearOfDeath' in person)) {
    //         age = person.yearOfDeath - person.yearOfBirth;
    //     } else {
    //         age = thisYear - person.yearOfBirth;
    //     }
        
    //     if(maxAge < age) {
    //         maxAge = age;
    //         obj = person;
    //     }
    // }
    // return obj;

   return people.reduce((oldestPerson, currentPerson) => {
        const oldestAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : oldestPerson;
   });

};

function getAge(birth, death) {
    if(!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
