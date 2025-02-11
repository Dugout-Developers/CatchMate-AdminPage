# CatchMate AdminPage

이 프로젝트는 CatchMate의 관리자 페이지입니다.

## 프로젝트 환경 설정

프로젝트를 클론한 후 환경을 설정하는 방법을 정리

1. 레포지토리 클론
2. node.js 설치

   📌 이 프로젝트는 NVM(Node Version Manager)을 사용하여 Node.js 버전을 맞춥니다.<br>
   📌 팀원들은 반드시 nvm을 설치한 후 nvm use 명령어를 실행하세요.<br>

   ✅ 1️. NVM이 설치되어 있는지 확인

   ```sh
   nvm -v
   ```

   📌 버전(0.39.x 등)이 출력되면 정상! <br>
   📌 만약 "nvm: command not found" 오류가 뜬다면, NVM 공식 문서에서 설치하세요. <br>

   ✅ 2️. 프로젝트에 맞는 Node.js 버전 사용

   ```sh
   nvm use
   ```

   📌 .nvmrc 파일에 지정된 버전(Node.js 22)이 자동으로 적용됩니다.<br>
   📌 만약 Node.js가 설치되지 않았다면, 아래 명령어를 실행하세요:

   ```sh
   nvm install 22
   nvm use 22
   ```

   ✅ 3️. Node.js 및 npm 버전 확인

   ```sh
   node -v
   npm -v
   ```

   📌 Node 버전이 v22.x.x 형태로 출력되면 정상!

3. Yarn 버전 통일 (Yarn 4.6.0 사용) 및 패키지 설치

   📌 이 프로젝트는 Yarn 4.6.0을 사용합니다.<br>
   📌 아래 방법으로 팀원들의 Yarn 버전을 통일해주세요.

   ✅ 1️. Corepack 활성화

   ```sh
   corepack enable
   ```

   ✅ 2️. 프로젝트에서 Yarn 버전 적용

   ```sh
   yarn set version 4.6.0
   ```

   ✅ 3️. Yarn 버전 확인

   ```sh
   yarn -v
   ```

   📌 4.6.0이 출력되면 정상!

   ✅ 4️. 모든 패키지 설치

   ```sh
   yarn install
   ```

   📌 node_modules/ 폴더가 정상적으로 생성되어야 합니다.

4. VSCode 설정 적용 (자동 포맷팅)

   ✅ 팀원들이 동일한 코드 스타일을 유지할 수 있도록 VSCode 설정 파일이 포함되어 있습니다.
   ✅ 아래 설정을 VSCode에서 적용하면 저장할 때 자동으로 포맷팅됩니다.

   1. Ctrl + Shift + P (Cmd + Shift + P for Mac) → "Preferences: Open Settings (JSON)" 검색 후 클릭

   2. 아래 내용을 추가:

   ```json
   {
     "editor.formatOnSave": true,
     "editor.defaultFormatter": "esbenp.prettier-vscode",
     "eslint.validate": ["javascript", "javascriptreact"],
     "eslint.format.enable": true,
     "editor.codeActionsOnSave": {
       "source.fixAll": true,
       "source.fixAll.eslint": true
     }
   }
   ```

   ✅ 또는 .vscode/settings.json 파일이 자동으로 적용됩니다.

5. 프로젝트 실행
   ```sh
   yarn start
   ```
   📌 localhost:3000에서 앱이 정상적으로 실행되는지 확인하세요!
