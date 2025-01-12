function getResponse(command) {
  switch (command) {
    case "ca":
      return "coming soon";
      break;
    case "pumpfun":
      return "coming soon";
      break;
    case "help":
      return (
        "ca\t prints the contact address\n" +
        "pumpfun\t prints the pumpfun link\n" +
        "fib\t prints the next fibonacci number\n" +
        "clear\t clears the terminal\n"
      );
      break;
    default:
      return 'This command does not exist. Use "help" to see a list of commands.';
  }
}

export default getResponse;
