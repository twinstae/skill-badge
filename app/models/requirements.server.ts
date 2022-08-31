export type RequirementT = {
  rawText: string;
  skill: string;
  count: number;
};

export const fakeRequirementList = [
  {
    rawText: 'HTML5, CSS3, ES6 Javascript 등 웹 표준, 시맨틱 마크업에 능숙하신 분',
    skill: 'web-standard',
    count: 14,
  },
  {
    rawText: 'Sass등 CSS 전처리기를 활용해 개발할 수 있으신 분',
    skill: 'sass',
    count: 3,
  },
  {
    rawText: 'vue, react, angular, svelte 등 SPA 프레임워크를 능숙하게 활용하시는 분',
    skill: 'spa-web-framework',
    count: 8
  },
  {
    rawText: '크로스 브라우징에 대한 이해가 있으신 분',
    skill: 'cross-browsing',
    count: 3
  },
  {
    rawText: 'Vue.js를 이용한 웹앱 개발에 대한 충분한 경험',
    skill: 'vue',
    count: 3
  },
  { rawText: 'React에 능숙하신 분', skill: 'react', count: 12 },
  {
    rawText: 'React Native 를 이용한 앱 개발 경험이 있으신 분',
    skill: 'react-native',
    count: 4
  },
  {
    rawText: '함수형 프로그래밍, 이터러블 프로그래밍에 익숙한 분',
    skill: 'functional',
    count: 1
  },
  {
    rawText: 'TypeScript 기반의 서비스를 개발 및 개선해 본 경험이 있는 분',
    skill: 'typescript',
    count: 8
  },
  {
    rawText: '글로벌 개발자 커뮤니티를 활용할 수 있는 수준의 영어 독해/작문 역량',
    skill: 'english',
    count: 1
  },
  {
    rawText: '측정 가능한 데이터 기반의 성능 최적화 경험이 있는 분',
    skill: 'profiling',
    count: 5
  },
  {
    rawText: 'SEO에 대한 이해도가 있으신 분',
    skill: 'seo',
    count: 2
  },
  {
    rawText: '여러 국가에 걸쳐 서비스를 운영/배포한 경험이 있는 분',
    skill: 'internationalization',
    count: 3
  },
  {
    rawText: 'Redux, MobX, Jotai 등 상태관리 라이브러러 사용 경험이 있는 분',
    skill: 'front-state-management',
    count: 7
  },
  {
    rawText: 'react query',
    skill: 'react-query',
    count: 2
  },
  {
    rawText: '웹팩4 및 웹팩5 빌드 과정을 상세하게 설정할 수 있으신 분',
    skill: 'webpack',
    count: 2
  },
  {
    rawText: 'storybook',
    skill: 'storybook',
    count: 1
  },
  {
    rawText: 'RESTful API 기반 개발 경험이 있는 분',
    skill: 'restful-api',
    count: 4,
  },
  {
    rawText: 'Git과 Github를 사용하여 프로젝트를 관리해보신 분',
    skill: 'git',
    count: 9,
  },
  {
    rawText: 'Canvas 사용 경험',
    skill: 'canvas',
    count: 2,
  },
  {
    rawText: 'WebGL/OpenGL을 활용하여 개발해보신 분',
    skill: 'webgl',
    count: 2,
  },
  {
    rawText: '컴퓨터공학 전공 혹은 그에 준하는 전공 및 지식을 보유하신 분',
    skill: 'computer-science',
    count: 3,
  },
  {
    rawText: '다양한 직군과 함께 문제를 정의하고 해결책을 찾아내는 협업 능력 있으신 분',
    skill: 'collaboration',
    count: 7,
  },
  {
    rawText: 'NextJS로 프로젝트를 진행해 본 경험이 있으신 분',
    skill: 'next-js',
    count: 4,
  },
  {
    rawText: 'Jest, Playwright 등으로 테스트를 작성하며 개발하는데 부담이 없으신 분',
    skill: 'test',
    count: 8,
  },
  {
    rawText: '클린한 아키텍처에 관심이 많으신 분',
    skill: 'architecture',
    count: 8,
  },
  {
    rawText: 'GraphQL에 대한 경험이 있으신분',
    skill: 'graph-ql',
    count: 1,
  },
  {
    rawText: 'Javascript 관련 오픈 소스 기여 경험이 있으신 분',
    skill: 'open-source',
    count: 2,
  },
  {
    rawText: '백엔드 서비스 개발 경험 및 Database에 대한 이해를 갖추신 분',
    skill: 'backend',
    count: 3
  },
  {
    rawText: 'CI/CD, 빌드 자동화, 지속적 통합에 관심이 많은 분',
    skill: 'ci-cd',
    count: 4,
  },
  {
    rawText: '서버 사이드 렌더링(SSR)에 대한 이해 및 처리 경험이 있는 분',
    skill: 'ssr',
    count: 3,
  },
  {
    rawText: '애자일 스프린트, MVP 단위 개발 프로세스에서의 개발 경험이 있는 분',
    skill: 'agile',
    count: 4, 
  },
  {
    rawText: 'AWS (Route53, Cloudfront, S3 를 포함한 다양한 서비스',
    skill: 'aws',
    count: 4,
  },
  {
    rawText: 'Linux의 기본적인 명령어들을 사용할 수 있는 분',
    skill: 'linux',
    count: 3,
  },
  {
    rawText: 'Figma / Zeplin을 사용할 디자이너와 협업이 가능하신 분',
    skill: 'design-tool',
    count: 2,
  },
  {
    rawText: '적극적으로 코드 리뷰에 참여한 경험이 있거나 코드 리뷰에 대해 부담이 없으신 분',
    skill: 'code-review',
    count: 2, 
  }
];
