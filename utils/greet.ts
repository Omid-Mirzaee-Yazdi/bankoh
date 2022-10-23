const getRandomInt = (max: number) => {
  //max is not included
  return Math.floor(Math.random() * max)
}

export const greet = (name: string) => {
  const timeBasedPhrases = {
    morning: ['Morning', 'Good morning', 'god morgon'],
    evening: ['Good Afternoon', 'Good Evening', 'Nice Sunset'],
    night: ['Good night', 'Nighty'],
  }
  const generalPhrases = ['Hej Hej', 'Hey', 'Howdy', 'Whats up', 'Hello']

  let greeting = ''
  let selectedGreetingList = []
  const timedOrGeneral = getRandomInt(2)
  if (timedOrGeneral === 0) {
    //time based
    const timestamp = new Date()
    const hour = timestamp.getHours()
    if (hour < 13) {
      selectedGreetingList = [...timeBasedPhrases.morning]
    } else if (hour < 19) {
      selectedGreetingList = [...timeBasedPhrases.evening]
    } else {
      selectedGreetingList = [...timeBasedPhrases.night]
    }
  } else {
    //general
    selectedGreetingList = [...generalPhrases]
  }
  const greetingIdx = getRandomInt(selectedGreetingList.length)
  const selectedPhrase = selectedGreetingList[greetingIdx]
  greeting = `${selectedPhrase}, ${name}!`
  return greeting
}
