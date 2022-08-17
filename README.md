# 리액트 연습용 프로젝트 - JeeHwan

---

## 목차

1. subreddit_feed
2. income_tracker
3. drag_n_drop

---

## 1. subreddit_feed

### 구현 아이디어

```
1. Input에 입력한 데이터를 useState를 사용해 subreddit에 상태저장
2. fetch를 통해 reddit에서 json 데이터를 가져옴
   예시)"https://www.reddit.com/r/javascript.json"
2-2. 위 URL에서 javascript 부분을 subreddit으로 바꿔서 fetch
3. 받아온 json데이터를 Article 컴포넌트에 props로 넘겨서 rendering
```

### 주요 기능

- fetch

```
- 서버에서 API를 호출하는것이 아닌 클라이언트(브라우저)에서 직접 API를 호출
- request, axios, jQuery 등의 라이브러리가 있음.
```

- fetch 사용법

```
- 첫번째 인자로 URL, 두번째 인자로 옵션 객체를 받아 Promise 타입 객체 반환
- API 호출이 성공할 경우 응답(response)객체, 실패할 경우 예외(error) 객체
  예시)
    fetch(url, options)
        .then((response) => console.log("response : ", respose))
        .catch((error) => console.log("error : ", error));
* 참고
  - https://www.daleseo.com/js-window-fetch/
  - https://yeri-kim.github.io/posts/fetch/
```

## 2. income_tracker

### 구현 아이디어

```
1. App.js 에서 income 과 totalIncome을 관리
1-1. totalIncome 은 App.js에서 Header로 props로 전달해서 표시
2. incomeForm 에서는 입력된 desc, price, date를 income에 전달
3. incomeList 에서는 income을 가져와서 rendering
```

### 주요 기능

- useRef

```

```

## 3. drag_n_drop

### 구현 아이디어

```
1. <Card> 컴포넌트가 drag 되면 setData를 통해 해당 카드의 id를 넘겨줌
1-1. id를 넘겨줌과 동시에 해당 card display를 none으로 바꿈
2. <Board> 컴포넌트 위에 drop 되면 drop된 card의 id를 가져옴
2-2. 해당 card의 display를 block으로 바꾸고 appendChild를 통해 가져옴
```

### 주요 기능

- draggable = "true"

```
- 기본적으로 html 태그들은 드래그할 수 없음
- draggable을 true로 줘야 드래그 가능
```

- setData / getData

```
- e.dataTrasfer.setData / getData를 통해 data를 주고받음.
  예시)
     document.getElementById('drag').ondragStart = function() {
      e.dataTransfer.setData('data', this.innerHTML); // 'data'에 내용을 담아서 보냄 (키-값 형식)
     }

     document.getElementById('drop').ondrop = function() {
      alert(e.dataTransfer.getData('data')); // 'data'에 담긴 내용을 가져옴
     }

- 참고 : https://www.zerocho.com/category/HTML&DOM/post/5942c4ed858a010018a8c32f
```
