describe('스킬 페이지', () => {
  it('역량을 클릭하면 해당 페이지로 이동한다', () => {
    cy.request('delete', 'http://localhost:3000/skills/admin/reset');

    cy.visitAndCheck('/skills');

    cy.findByRole('link', { name: '리액트' }).click();

    cy.location('pathname').should('eq', '/skills/react');
  });

  it('상위, 하위역량을 클릭하면 다른 역량으로 이동할 수 있다', () => {
    cy.visitAndCheck('/skills/react');

    cy.findByRole('link', { name: 'spa-framework' }).click();

    cy.location('pathname').should('eq', '/skills/spa-framework');
  });

  it('역량을 만들 수 있다', () => {
    cy.visitAndCheck('/skills');

    cy.findByRole('link', { name: '새 역량 만들기' }).click();

    cy.location('pathname').should('eq', '/skills/admin/new');

    cy.findByLabelText('슬러그').type('fake-for-test');
    cy.findByLabelText('역량 제목').type('테스트 용 가짜');
    cy.findByLabelText('상위 역량').type('re');
    cy.findByRole('button', { name: 'redux' }).click();
    cy.findByLabelText('설명').type('> 테스트용 가짜 내용이에요');

    cy.findByRole('button', { name: '역량 공유하기' }).click();

    cy.location('pathname').should('eq', '/skills/fake-for-test');
  });

  it('역량을 수정할 수 있다', () => {
    cy.visitAndCheck('/skills/fake-for-test');

    cy.findByRole('link', { name: '수정하기' }).click();

    cy.findByLabelText('역량 제목').type('{backspace}{backspace}fake');
    cy.findByRole('button', { name: 'redux 태그를 삭제' }).click();
    cy.findByLabelText('하위 역량').type('react{enter}');

    cy.findByRole('button', { name: '역량 수정하기' }).click();

    cy.location('pathname').should('eq', '/skills/fake-for-test');

    cy.findByRole('heading', { name: '테스트 용 fake' });
  });

  it('역량을 삭제할 수 있다', () => {
    cy.visitAndCheck('/skills/fake-for-test');

    cy.findByRole('button', { name: '삭제하기' }).click();

    cy.findByLabelText('fake-for-test를 삭제하겠습니다.').type(
      'fake-for-test를 삭제하겠습니다.'
    );

    cy.findByRole('button', { name: '삭제하겠습니다' }).click();

    cy.location('pathname').should('eq', '/skills');

    cy.findByRole('heading', { name: '역량 목록' });
  });
});

export default {};
