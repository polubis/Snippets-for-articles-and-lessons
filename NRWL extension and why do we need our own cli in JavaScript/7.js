yargs
   .command(
       'init',
       'Initialize new workspace',
       {
           name: {
               alias: 'n',
               type: 'string',
               demandOption: true,
           },
       },
       async (args) => {
           await workspaceInit({
               name: args.name,
           })
       },
   )
