# 리액트 연습용 프로젝트 - JeeHwan

---

## 목차

1.subreddit_feed

---

## 1.subreddit_feed

### 구현 아이디어

```
1. Input에 입력한 데이터를 useState를 사용해 subreddit 에 상태저장
2.fetch를 통해 reddit에서 json 데이터를 가져옴
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
- 참고 : https://www.daleseo.com/js-window-fetch/
```
