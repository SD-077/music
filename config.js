

module.exports = {
  TOKEN: "MTEwMTgwNDU4MzA5OTA0ODAxNg.GYkJjV.aDq7MC8Isnrs1eyZJm6UQiTn8aNczXyMMWIGDY",
  language: "en",
  ownerID: ["750456414023057523", ""], 
  mongodbUri : "mongodb+srv://wadi3:pmHtN9btW5Tcxeo7@cluster0.ac5di.mongodb.net/bot",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
    {
      name: "INZEWORLD.COM (DE)",
      password: "saher.inzeworld.com",
      host: "lava.inzeworld.com",
      port: 3128,
      secure: false
    },
    {
      name: "Catfein ID",
      password: "catfein",
      host: "lava.catfein.com",
      port: 4000,
      secure: false
    },
    { 
      name: "saher",
      password: "saher.inzeworld.com",
      host: "lava.inzeworld.com",
      port: 3128,
      secure: false
    }
  ]
}
