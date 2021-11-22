# /bin/sh

export NVM_DIR=$HOME/.nvm;
source $NVM_DIR/nvm.sh;

nvm install $1

node --version

npm run test -- --logHeapUsage