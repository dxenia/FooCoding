node src/api-cli.js --resource users --method POST
node src/api-cli.js --resource posts --method POST

node src/api-cli.js --resource users --method GET --all
node src/api-cli.js --resource users --method GET --id
node src/api-cli.js --resource posts --method GET --all
node src/api-cli.js --resource posts --method GET --id

node src/api-cli.js --resource users --method DELETE --id
node src/api-cli.js --resource posts --method DELETE --id

node src/api-cli.js --resource users --method PATCH --id
node src/api-cli.js --resource posts --method PATCH --id
