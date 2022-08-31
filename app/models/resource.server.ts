export type ResourceT = {
  slug: string,
  title: string,
  description: string,
  link: string,
}

export const fakeReactResources = [
  {
    skillId: 'react',
    slug: 'beta-reactjs-docs',
    title: '리액트 공식 문서 베타 버전',
    description: '새로운 React 공식 문서는 더 깊이 있는 내용을, 직접 돌려볼 수 있는 코드 샌드박스와 함께 설명해줍니다. 영어라는 장벽이 있긴 하지만. 인터넷에 나오는 낡은 내용이 아니라, 최신의 리액트를 제작자들에게 직접 배울 수 있는 최고의 자료입니다.',
    link: "https://beta.reactjs.org/learn",
  },
  {
    skillId: 'restful-api',
    slug: 'restful-api-sangco',
    title: '기계들의 대화법 - REST API [생활코딩]',
    description: '생활코딩의 이고잉 님이 실습을 통해 HTTP와 REST API의 간단한 사용법을 알려주는 강의입니다',
    link: "https://www.youtube.com/watch?v=PmY3dWcCxXI&t=1s",
  }
]