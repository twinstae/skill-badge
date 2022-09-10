// DDD 도메인 주도 설계 Domain Driven Design
// BDD 행동 주도 개발|설계 Behavior Driven Design|Development

describe('직군 페이지', () => {
  it('직군 선택 페이지에서, 프런트엔드 직군을 선택하면, 해당 페이지로 이동한다', () => {
    // given (어떤 주어진 상황 - 어떤 상황이 주어졌을 때)
    // 주소 창에 / 를 쳐서 들어온다    
    cy.visit('http://localhost:3000/');
    // /positions 로 리다이렉트 된다
    cy.location('pathname')
      .should('eq', '/positions');

    // when (사용자가 행동을 하면)
    // 프런트엔드라는 링크를 클릭한다
    cy.wait(100)
      .findLink('프런트엔드')
      .click();

    // then (우리 앱은 어떻게 되어야 한다)
    // 프런트엔드 직군 페이지로 이동한다
    cy.location('pathname')
      .should('eq', '/positions/frontend');
    
    cy.findByRole('heading', { name: 'frontend' });
  });

  it('다른 직군 보러가기 링크를 클릭하면, 해당 직군으로 이동한다', () => {
    // frontend 직군 페이지를 방문해서
    cy.visit('http://localhost:3000/positions/frontend');
    cy.wait(100)
      .findLink('백엔드 보러 가기')
      .click()
    // 백엔드 직군 페이지로 이동한다
    cy.location('pathname')
      .should('eq', '/positions/backend')
    
    cy.findByRole('heading', { name: 'backend' });

    cy.findLink('프런트엔드 보러 가기')
      .click()
    // 백엔드 직군 페이지로 이동한다
    cy.location('pathname')
      .should('eq', '/positions/frontend')
  })
})

export default {};
