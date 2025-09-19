require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIACR8MluWlESaaAQAAIUHAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9lY161Rju3iI6YhDxfkERRDf2oYQCqoUCqwoUJ*yU*Yv9hvmuDbR7eh52Z3t5KpIi82Sec*IbIBlmaIYq0PsGcopLyFF95FWOQA*0izBEFDRBADkEPbA2+25hbE*YLgx*PL8QYbsauNLS0TvqTmtIw8wRttQN3WTxAu5NkBfHBPu*SDiO0mWkb11ZJLYrXxrjnZPJLjyd1ZFpJW2tm6DXi+st7Yq9gHudEWKKSWTmMUoRhckMVRbE9HPwI0suMly1bCRv7O2YmsTfnihCt+F8NBGDvndrj7NJRdmYfQ6+NjAGfVzChoxlJuBs0w3LMtbV6GIMpiuqB*KK3+zsKvbXT*gMRwQFkwARjnn16bmnBtcmHWskpHyJBdXwj8l278hrvsO6MOlmbrRc9FUhuJ3UzwE*UrJazeanxBT8znROi3V26xzSy8JdQeJVu61Yhqv1BMUD9WfgFn3Xyun*zF3W95ndP1uSZZs3PxWkknY8R2nl1yDiZ9wgREmHTg6x43wOvhRcj9ejMzUPt408QC1UdibX+DTsY*0SS9qO6GPsDJV9qvsf8CEv6K9QqsnRnyt8eunHg6WbhrcGvR2VUhVGyeS0Wq9b+dzklwjNuuigH0aRTez9sRx3i1cx3y8Wt2kIWxLTWTdES66rqCiFdqy*PDo6oWoSgJ50bwKKIsw4hRxn5BHTWk0Ag9JGPkX8MV5giAt09Ly8Ms6ps476TrATgmkrsxBhg3K*O0Z6235Ng+Hu8gKaIKeZjxhDwRgzntFqgRiDEWKg9*sfTUDQlT+Jq8spUhOEmDLukCJPMhi8s*r+Efp+VhBuV8Q36gOioCd+hBHnmESsnmNBIPVjXCIjhpyBXggThn50iCgKQI*TAv1wrZEF9eDbltz39p0laIL0QQgOapFoarsly922JrZ68lf25VJnhXn+hSAOmoDA+jL4*if+bYRI7f3k+19fQBMkz98VSe4qkqS1VVGR5J78tY7ffwCv6wSIQ5ywesBTMhS7omHOlAVb7Ecj3Yx0I9LBR6PvinkykqdMSWejuOMJl*BqNw67KOceR+Q8lNk5PHTlvavO1o3k6rz8QxLQA6bmagt*Y82MZdmms+jWCpNwqGqmqu4m01Rfbm5XbVp5q9c4Ge6k7GAVSmEdhOGGJ203tjz1ZK5FzR9vlGzeUCRPDkV9*VJXC1CJffRzMXSj7WCqlMLmmDuGliqvhY2ieLXzpng7bJFuBPWd38q1jTDzA79yY8nSDm5nK+eqVlnBeeQs0mLuCBszadg8Wmnrzeublh9eSt52GH6orKawfg0xeqyEN67+i9In7lp44r35U4q3HfMvPu3DA11qOM7CodAZd5wydbPZ0W17eSsO6IzIYZAOkXGyct8F9*sfTZAnkIcZTUEPsPQIQRPQrKhlPCFh9otKhu5MzOjZdQIZ1z+sscUpYhymOehJba0ji12t03resmiWjyGL6z01U+OxWuu80vPc5pC*Ow3o9TM4b8D9b1BLAQIUAxQAAAgIACR8MluWlESaaAQAAIUHAAAKAAAAAAAAAAAAAACkgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAJAEAAAAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254762297506',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'patel874',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
