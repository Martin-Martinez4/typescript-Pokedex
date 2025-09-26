import { initState } from "./commands/state.js";
import { startREPL } from "./repl.js";

async function main(){
  const state = initState(1000 * 60 * 5)
  try{

    await startREPL(state);
  }catch(err){

    if(err instanceof Error ){

      console.error(err.message)
    }else{
      console.error("An unknown error occured")
      process.exit(1)
    }
  }
}

main();