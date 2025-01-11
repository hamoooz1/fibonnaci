function getResponse(command){
  switch (command) {
    case "ca":
      return "coming soon";
      break;
    case "pumpfun":
      return "coming soon";
      break;
    default:
      return "This command does not exist. Use \"help\" to see a list of commands.";
  }
}

export default getResponse;
