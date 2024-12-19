document.addEventListener('DOMContentLoaded', function () {
    // 하이라이트 긋기
    const highlights = document.querySelectorAll('.highlight');
    highlights.forEach((highlight) => {
        highlight.addEventListener('mouseenter', () => {
            highlight.classList.add('active');
        });
        highlight.addEventListener('mouseleave', () => {
            highlight.classList.remove('active');
        });
    });

        // 하이라이트 긋기2
        const highlightElements = document.querySelectorAll('.highlight');

    highlightElements.forEach((highlight) => {
        const parentDiv = highlight.closest('div'); // 부모 div 찾기
        const highlight2Elements = parentDiv.querySelectorAll('.highlight2'); // 같은 div 내의 highlight2 요소 찾기

        // highlight 요소에 마우스를 올렸을 때
        highlight.addEventListener('mouseenter', () => {
            // highlight2에 active 클래스를 1초 후 추가
            highlight.classList.add('active'); // 즉시 실행
            setTimeout(() => {
                highlight2Elements.forEach((highlight2) => {
                    highlight2.classList.add('active');
                });
            }, 450); //지연연
        });

        // highlight 요소에서 마우스를 뗐을 때
        highlight.addEventListener('mouseleave', () => {
            // 즉시 모든 active 클래스 제거
            highlight.classList.remove('active');
            highlight2Elements.forEach((highlight2) => {
                highlight2.classList.remove('active');
            });
        });
    });

    // h2 색상 변경
    const h2Elements = document.querySelectorAll('.mainBackImage h2');
    h2Elements.forEach((h2) => {
        h2.addEventListener('mouseenter', () => {
            h2.style.color = 'brown';
        });
        h2.addEventListener('mouseleave', () => {
            h2.style.color = 'black';
        });
    });

    // 헤더 고정
    const header = document.getElementById('header');
    const headerOffset = header.offsetTop;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > headerOffset) {
            header.classList.add('sticky'); 
        } else {
            header.classList.remove('sticky'); 
        }
    });
});


