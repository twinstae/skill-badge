describe('배지 페이지', () => {
  it('새로운 배지를 만들 수 있다', () => {
    cy.visitAndCheck('/badges');
    cy.findLink('배지 만들기').click();
    cy.location('pathname').should('eq', '/badges/admin/new');
    cy.findTextBox('슬러그').type('linux-blablabla');
    cy.findTextBox('배지 제목').type('리눅스로 ssh 통신을 해서 ec2에 node 세팅을 할 수 있습니다');

    cy.findByRole('combobox', {name: '역량 목록'})
      .type('linux');
    cy.findByRole('combobox', {name: '아이콘'})
      .type('ComputerDesktopIcon');
    // 스토리북 => 시각적 테스팅 도구 (보통 컴포넌트). 우리는 페이지 전체를 띄어놓고 하는데
    // 컴포넌트 하나만 띄어놓고 하나만 테스트할 때 쓸 수 있음 (컴포넌트 포켓몬 도감)
    cy.findTextBox('1번째 조각').type('ssh로 ec2에 접속 할 수 있어요');
    cy.findButton('+ 조각 추가하기').click();
    // 또 적고
    cy.findTextBox('2번째 조각').type('터미널만으로 node 프로젝트를 세팅할 수 있어요');

    // 배지 만들기! 버튼 누른다
    cy.findButton('배지 만들기!').click();

    cy.location('pathname').should('eq', '/badges');

    cy.findByRole('link', { name: /리눅스로 ssh 통신을 해서 ec2에 node 세팅을 할 수 있습니다/ });
  })

})

export default {};
