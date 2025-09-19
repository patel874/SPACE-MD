require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAEcxM1sUTdCtVgQAAHIHAAAKAAAAY3JlZHMuanNvbpVVXbOiOBD9L3nFGvkQQatu1QKiIlxFERG29iFCwCBfQhBhyv++hc6duQ+7s3d5CklX9+lzTiffQZbjCumoBdPvoCjxDRLUL0lbIDAFch2GqAQDEEACwRT4ay2Vt3tXR7f9Wj9c880ZzY0JXKpb67xdmFFhbuy1N9kv6DfwGICiPiXY*01CWQ2vt3vk8rpcz3jmvUwad6NleD68arvL7gDhfGXnl*PMkt7Ao88IcYmzSC3OKEUlTHTUmhCXX4MvaVCf5dWujQL*FM0vgljcbqNyRtk7mNLDGWH9zbD1vdlC+xp8XYukeJ3avHlgxB1VLRZ1YLu+obLOqnCxaWI85jJn1tD2C36FowwFWoAygkn7Zd6j99MVnpK9uK+dnbVVgnw9p4WDttx4Zseu0Fqb87GleqL6Rd6rpWNttWXhLbyxvZc32TBzmiNFZEzN0*O9G5YLy993iyIVPwM3yw+vXP4P73gTrZ1FZOfU6CTWGhfuLnqY0KFBi+R8M1yKazyecg2Nu3wNvmXF5GzHdh1syljzIr7hVKWMt7ZkDjEncbJszIbU1r5uP8GHpC5*h1KUVhSXXmUhCepTWRGxFfPj7sisA*a4vF+bkEwu+ikOO3LA3bLzZbPz9QNcNQW28+2dzcesKCZHy7GoazZT3X1wj87bt2dHF9RqAZgyjwEoUYQrUkKC8+y5x*IDAIObhfwSkSe9wLtrlelN3kMzdDB9vh9ZyMwUWpuTBZwph5Bt3YvayvYwcd*AABRl7qOqQsESVyQv23dUVTBCFZj++dcAZOhOXsL15ThmAEJcVsTO6iLJYfCh6sch9P28zojVZr7SL1AJpvSvbUQIzqKq57HOYOmf8Q0pZ0gqMA1hUqGfHaISBWBKyhr9nFolD3rit664NFRxDwYgfQqCAzAFLD8SGIEVRyIjThnuj+pb06eFRfEtQwQMQPIMY0RGYCfsiBvxvEALfWR*8PiJsE8YIAJxUoEpUN6P2iXRtk2NunvkupIlSbok9ax9dPRhjRf1O3aXyffNcezGnG50+yhk8eiydVfppfD4Tli7Nx4LWhKy*5gETAGsUnll6pvR3c*YJr5XEJobyqDc1RDPum25uDfq1c5nR0aJHaa7M02zPu5qL1uqs8SWjWGbHhObpGvZGFNLARNHjJXmra8WoBv20edise0e*GsqpTZ7U0Jh3p3U3XAlGGPaN3WKHZvhSKzVmnboZKOf1ff0yNfvfNx2l51jTDRVR9KmEebtslqiMV5rnRGjuHmZ9jk0yY*LCj*t1GvV*4YYPWc*g72C*63dC3hvMfox+JTjx23yb6+DHVy8xt8nVKpNWizSo+Ukr1fqQvEK3UE+1TkG5dbt6jiJwOPx1wAUCSRhXqa9DFlQ5jgAA1Dmde9ZLQvz3xRTJFpTpFfnCayI9GsO9jhFFYFpAaaMwIvsmGUZ7hVllnmxhNUZTAG3m3jcpDd1KxWFRSD5GCsg9d9cqcHjb1BLAQIUAxQAAAgIAEcxM1sUTdCtVgQAAHIHAAAKAAAAAAAAAAAAAACkgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAH4EAAAAAA=='
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254717284818',
  
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
