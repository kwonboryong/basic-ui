<<<<<<< HEAD
@import url(/style/reset.css);
@import url(/style/theme.css);
@import url(/style/base.css);

body{
  margin: 50px;
}

h1{
  margin: 20px;
}

.pagination{
  --text-color: var(--light-blue);
  --selected-text-color: var(--dark-blue);

  display: flex;
  flex-flow: row nowrap;
  column-gap: 0.5rem;

  button{
    border: 0;
    background: transparent;
    padding: 0;
    flex: 0 0 1.5rem;
  }

  div{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    flex: 1 1 0;
    column-gap: 0.125rem;
    
    a{
      color: var(--text-color);
      padding: 0.5rem;

      &.is-selected{
        color: var(--dark-blue);
        font-weight: 700;
      }
    }
  }
}
=======
// DOM 선택
const links = document.querySelectorAll('.pagination a');

// 함수 구현
const handleLinkClick = (event) => {
    // 기본 동작을 취소합니다.
    event.preventDefault();

    // 모든 링크에서 is-selected 클래스를 제거하고 aria-current 속성을 삭제합니다.
    links.forEach((link) => {
        link.classList.remove('is-selected');
        link.removeAttribute('aria-current');
    });

    // 클릭된 링크에 is-selected 클래스를 추가하고 aria-current="page"를 추가합니다.
    event.target.classList.add('is-selected');
    event.target.setAttribute('aria-current', 'page');
}

// a 요소에 이벤트를 바인딩
links.forEach((link) => {
    link.addEventListener('click', handleLinkClick);
});
>>>>>>> ec6ceba81d64b2cc1ebbc43ad1038d101af970ee
