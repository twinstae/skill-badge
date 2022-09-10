describe('스킬 페이지', () => {
  it('역량을 클릭하면 해당 페이지로 이동한다', () => {
    cy.request('delete', 'http://localhost:3000/skills/admin/reset');

    cy.visitAndCheck('/skills');

    cy.findTextBox('검색하기').type('react');
    cy.findLink('리액트 네이티브 react-native').click();

    cy.location('pathname').should('eq', '/skills/react-native');
  });

  it('상위, 하위역량을 클릭하면 다른 역량으로 이동할 수 있다', () => {
    cy.visitAndCheck('/skills/react-native');

    cy.findLink('react').click();

    cy.location('pathname').should('eq', '/skills/react');
    cy.matchImageSnapshot('리액트 역량 상세');
  });

  it('역량을 만들 수 있다', () => {
    cy.visitAndCheck('/skills');
    cy.matchImageSnapshot('역량 목록');

    cy.findLink('새 역량 만들기').click();

    cy.location('pathname').should('eq', '/skills/admin/new');

    cy.findTextBox('슬러그').type('fake-for-test');
    cy.findTextBox('역량 제목').type('테스트 용 가짜');
    cy.findTextBox('상위 역량').type('re');
    cy.findButton('redux').click();
    cy.findTextBox('설명').type('> 테스트용 가짜 내용이에요');
    cy.matchImageSnapshot('역량 생성 폼');

    cy.findButton('역량 공유하기').click();

    cy.location('pathname').should('eq', '/skills/fake-for-test');
  });

  it('역량을 수정할 수 있다', () => {
    cy.visitAndCheck('/skills/fake-for-test');

    cy.findLink('수정하기').click();

    cy.findTextBox('역량 제목').type('{backspace}{backspace}fake');
    cy.findButton('redux 태그를 삭제').click();
    cy.findTextBox('하위 역량').type('react{enter}');

    cy.matchImageSnapshot('역량 수정 폼');

    cy.findButton('역량 수정하기').click();

    cy.location('pathname').should('eq', '/skills/fake-for-test');
    cy.findByRole('heading', { name: '테스트 용 fake fake-for-test' });
  });

  it('역량을 삭제할 수 있다', () => {
    cy.visitAndCheck('/skills/fake-for-test');

    cy.findButton('삭제하기').click();

    cy.findTextBox('fake-for-test를 삭제하겠습니다.').type(
      'fake-for-test를 삭제하겠습니다.'
    );

    cy.matchImageSnapshot('역량 삭제 모달');
    cy.findButton('삭제하겠습니다').click();

    cy.location('pathname').should('eq', '/skills');

    cy.findByRole('heading', { name: '역량 목록' });
  });
});

export default {};
