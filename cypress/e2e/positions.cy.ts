// DDD 도메인 주도 설계 Domain Driven Design
// BDD 행동 주도 개발|설계 Behavior Driven Design|Development

describe('직군 페이지', () => {
  it('직군 선택 페이지에서, 프런트엔드 직군을 선택하면, 해당 페이지로 이동한다', () => {
    // given (어떤 주어진 상황 - 어떤 상황이 주어졌을 때)
    // 주소 창에 / 를 쳐서 들어온다
    cy.visit('http://localhost:3000/');
    // /positions 로 리다이렉트 된다
    cy.location('pathname').should('eq', '/positions');

    // when (사용자가 행동을 하면)
    // 프런트엔드라는 링크를 클릭한다
    cy.wait(100).matchImageSnapshot('직군 선택 페이지');

    cy.findLink('프런트엔드').click();

    // then (우리 앱은 어떻게 되어야 한다)
    // 프런트엔드 직군 페이지로 이동한다
    cy.location('pathname').should('eq', '/positions/frontend');

    cy.findByRole('heading', { name: 'frontend' });
  });

  it('다른 직군 보러가기 링크를 클릭하면, 해당 직군으로 이동한다', () => {
    // frontend 직군 페이지를 방문해서
    cy.visitAndCheck('/positions/frontend');
    cy.wait(100).findLink('백엔드 보러 가기').click();
    // 백엔드 직군 페이지로 이동한다
    cy.location('pathname').should('eq', '/positions/backend');

    cy.findByRole('heading', { name: 'backend' });
    cy.matchImageSnapshot('백엔드 직군 페이지');

    cy.findLink('프런트엔드 보러 가기').click();
    // 프런트 직군 페이지로 이동한다
    cy.location('pathname').should('eq', '/positions/frontend');
    cy.matchImageSnapshot('프런트엔드 직군 페이지');
  });

  it('직군에 공고 문구를 추가할 수 있다', () => {
    // 직군 상세 페이지에서
    // visitAndCheck를쓰면 localhost3000을안써도됨
    cy.visitAndCheck('/positions/frontend');

    // 공고 문구 추가하기를 클릭하고
    cy.findLink('공고 문구 추가하기').click();
    // form을 채우고 제출하면
    // findTextBox 라벨을가지고텍스트박스를찾아라 (aria-labeledby)
    cy.findTextBox('슬러그').type('react');
    cy.findTextBox('내용').type('react를 기깔나게 다루시는 분');
    // radio input - findByRole에서 할수잇는건 radio의 name에서 '프런트엔드'찾아서클릭
    cy.findByRole('radio', { name: '프런트엔드' }).click();
    // 포함되어있는거찾기위해정규표현식을사용(다른추가하기버튼이잇으면대신눌릴수잇는단점이잇음)
    cy.findButton(/추가하기/).click();

    // 날로먹는해결책 => 1초기다리기 wait(1000)
    // 올바른해결책 => 스피너가빙글빙글도는게끝날때까지기다리는것
    cy.findByLabelText('공유 중...').wait(1000);

    // 역량 페이지에 해당 공고가 추가되어 있다
    cy.visitAndCheck('/skills/react');

    // input이 textBox
    cy.findByRole('listitem', { name: /react를 기깔나게 다루시는 분/ });
  });
});

export default {};
