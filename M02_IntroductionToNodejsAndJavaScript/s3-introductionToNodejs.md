
# Session 3 - Introduction to Node

- [Session 3 - Introduction to Node](#session-3---introduction-to-node)
  - [Installation](#installation)
    - [NVM - Node Version Manager](#nvm---node-version-manager)
    - [Node.js with NVM](#nodejs-with-nvm)

## Installation

### NVM - Node Version Manager

1. Visit https://github.com/nvm-sh/nvm
2. Run the next command to install
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
   ```
3. Verify installation
   ```bash
   command -v nvm
   ```

### Node.js with NVM

1. List available Node.js versions with
   ```bash
   nvm ls-remote
   ```
2. Install the desired Node.js version
   ```bash
   nvm install node # installs latest version
   nvm install 14.7.0 # installs specified version
   ```
3. Use the installed version
   ```bash
   nvm use node # use latest
   nvm use 16.13.1 # use specified version
   ```
4. Set default node versions
   ```bash
   nvm alias default node # set latest node version as default
   nvm alias default 16.13.1 # set specified node version as default node
   ```
