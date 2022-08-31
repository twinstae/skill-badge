import { z } from 'zod';

export const slugSchema = z.string().min(1, 'slug가 비어있어요');

export const skillSchema = z.object({
  slug: slugSchema,
  title: z.string().min(1, '값을 입력해주세요'),
  parents: z.array(slugSchema),
  childrens: z.array(slugSchema),
  content: z.string().min(1, '값을 입력해주세요'),
})

export type Skill = z.infer<typeof skillSchema>;

const fakeDB: Skill[] = [
  {
    slug: 'spa-framework',
    title: 'SPA 프레임워크',
    parents: [],
    childrens: ['react', 'vue', 'svelte'],
    content: '',
  },
  {
    slug: 'vue',
    title: '뷰',
    parents: ['spa-framework'],
    childrens: [],
    content: '',
  },
  {
    slug: 'svelte',
    title: '스벨트',
    parents: ['spa-framework'],
    childrens: [],
    content: '',
  },
  {
    slug: 'react',
    title: '리액트',
    parents: ['spa-framework'],
    childrens: ['remix', 'next-js'],
    content: '> "React is a JavaScript library for building user interfaces" - [리액트 공식 문서](https://beta.reactjs.org/learn/thinking-in-react)',
  },
  {

    slug: 'front-state-management',
    title: '프런트엔드 상태 관리',
    parents: [],
    childrens: ['redux'],
    content: '반응형(reactive) 상태를 관리하는 라이브러리들이 있습니다. 이런 라이브러리들은 보통 내부적으로는 구독(subscribe)이나, 관찰자(observer) 패턴을 이용해서, 상태가 변하면 부수효과를 프런트엔드 프레임워크에게 전파해줍니다. react에서는 redux, recoil, jotai 등이 있고, vue에서는 pinia가 공식입니다.',
  },
  {
    slug: 'redux',
    title: '리덕스',
    parents: ['front-state-management'],
    childrens: [],
    content: '리덕스는 프레임워크에 무관한 프런트엔드 상태 관리 라이브러리입니다. 하지만 리액트 생태계에서 가장 널리 쓰여왔기 때문에, 리액트를 쓰는 회사에서 요구하는 경우가 많습니다.',
  },
  {
    slug: 'web-standard',
    title: '웹 표준',
    parents: [],
    childrens: ['html', 'css', 'javascript'],
    content: '',
  },
  {
    slug: 'html',
    title: 'HTML: 하이퍼 텍스트 마크업 언어',
    parents: ['web-standard'],
    childrens: ['semantic-html'],
    content: '',
  },
  {
    slug: 'semantic-html',
    title: '시맨틱 HTML',
    parents: ['html'],
    childrens: [],
    content: '',
  },
  {
    slug: 'css',
    title: 'CSS 캐스케이딩 스타일 시트',
    parents: ['web-standard'],
    childrens: ['sass'],
    content: `> WHAT IS CSS? Cascading Style Sheets (CSS) is a simple mechanism for adding style (e.g., fonts, colors, spacing) to Web documents. \n>\n> 출처: <a rel="author" class="link link-primary" href="https://www.w3.org/Style/CSS">W3C Cascading Style Sheets home page</a>`,
  },
  {
    slug: 'javascript',
    title: '자바스크립트',
    parents: ['web-standard'],
    childrens: ['typescript'],
    content: '',
  },
  {
    slug: 'typescript',
    title: '타입스크립트',
    parents: ['javascript'],
    childrens: [''],
    content: '',
  },
  {
    slug: 'sass',
    title: 'SASS',
    parents: ['css'],
    childrens: [],
    content: '',
  },
  {
    slug: 'ssr',
    title: 'SSR',
    parents: [],
    childrens: ['remix', 'nextjs'],
    content: '',
  },
  {
    slug: 'web-api',
    title: '웹 API',
    parents: [],
    childrens: ['restful-api', 'graph-ql', 'grpc'],
    content: '',
  },
  {
    slug: 'restful-api',
    title: 'RESTful API',
    parents: ['web-api'],
    childrens: [],
    content: 'RESTful API는 HTTP를 가지고 서버와 상태 데이터를 주고 받는 표준입니다. 과거에 Ajax라 부르던 것과도 비슷한 의미로 쓰입니다. REST는 엄격한 정의가 있고 논문도 있지만, 이를 잘 이해하고 사용하는 경우는 거의 없습니다. 보통 RESTful API라 하면 HTTP API를 이야기합니다.\n\n채용공고에서 RESTful API를 언급하는 빈도는 점점 줄어들고 있습니다. 그 이유는 RESTful를 사용하지 않기 때문이라기 보다는, 너무나 당연해졌기 때문이라 생각합니다.',
  },
  {
    slug: 'git',
    title: '깃',
    parents: [],
    childrens: ['github'],
    content: '',
  },
  {
    slug: 'github',
    title: '깃허브',
    parents: ['git'],
    childrens: [],
    content: '',
  },
  {
    slug: 'full-stack',
    title: '풀스택',
    parents: [],
    childrens: ['remix', 'nextjs'],
    content: '',
  },
  {
    slug: 'remix',
    title: '리믹스',
    parents: ['react', 'ssr', 'full-stack'],
    childrens: [],
    content: '',
  },
  {
    slug: 'next-js',
    title: '넥스트js',
    parents: ['react', 'ssr', 'full-stack'],
    childrens: [],
    content: '',
  },
  {
    slug: 'test',
    title: '테스트',
    parents: [],
    childrens: ['tdd', 'unit', 'component', 'e2e'],
    content: '',
  },
];

export const skillIdList = fakeDB.map(skill =>skill.slug);

export async function getSkillList(){
  return fakeDB;
}

export async function getSkill(slug: string){
  return fakeDB.find(skill => skill.slug === slug);
}

export async function createSkill(skill: Skill) {
  return fakeDB.push(skill);
}