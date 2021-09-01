# ssac_react

- node modules: node.js module folder
- public: 실제 브라우저에 표시되는 리소스들이 저장되는 폴더
- src: html 파일에 반영되는(렌더링) 콘텐츠, 기능이 구현되어 있는 파일들이 저장되어 있는 폴더
- index.html <=(렌더링)== index.js <=(렌더링)== App.js(component)

# React 로컬 개발

## 소프트웨어 & 라이브러리 설치

- node.js 설치 / 버전 확인
- npm(node package manager) 버전 확인
- yarn 설치 / 버전 확인

### unix / dos 명령어

- clear / cls
- ls, ls -l / dir
- cd : change directory
- pwd : present working directory
- mkdir / md : make directory

### Visual Studio Code

- 설치

### React 프로젝트 설치

- npx create-react-app [폴더이름]
- 폴더이름: . - 현재폴더

## react

- 공식 문서: https://reactjs.org/

## React의 특징

- Virtual DOM
- SPA(Single Page Application)
- component: 작은 단위로 나누어준 코드 블럭(단위, 조각)

### JSX(JavaScript Syntax Extension / JavaScript XML)


- HTML 마크업 언어를 별다른 기호 사용없이 그대로 JavaScript 구문처럼 사용할 수 있는 것
- Babel.js 라이브러리가 JSX를 사용 가능하게 해줌
- JSX는 return 키워드 () 안에 하나의 Element 영역으로 그룹화되어 있어야 함
- 하나의 영역으로 그룹화할 때 특정 Element로 그룹화해서 반영하지 않을 떼 - Fragment 사용
- JSX에서 자바스크립트 변수 값 사용하기
    - {변수이름}
- JSX에서 class, id 지정하기
    - class: className 속성 사용
    - id: id 속성 사용
- JSX 주석: {/* 주석내용 */}


### 구조 분해 할당

### todo app
https://dev.to/hariramjp777/todo-app-using-html-css-and-js-local-storage-design-html-and-css-1m0j