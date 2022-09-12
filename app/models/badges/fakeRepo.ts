import type { BadgeT } from "./schema";

const fakeBadgeList: BadgeT[] = [
  {
    slug: 'linux-cli-fs',
    title: '리눅스 명령줄로 파일 시스템을 탐색하고 조작할 수 있습니다',
    skillSlugs: ['linux'],
    icon: 'commandLine',
    pieces: [
      'pwd, ls, cd, tree 명령어로 파일 시스템을 탐색할 수 있습니다',
      'cp, mv, rm 명령어로 파일을 복사, 이동, 삭제할 수 있습니다',
      'mkdir과 -r flag로 디렉토리를 다룰 수 있습니다',
      'ln으로 링크를 생성하고 활용할 수 있습니다',
      '상대 경로와 절대 경로를 이해하고 활용할 수 있습니다',
      '. 으로 시작하는 숨김 파일을 다룰 수 있습니다',
      '파일을 다룰 때 흔한 실수를 알고 예방할 수 있습니다',
    ].map((title, index) => ({
      id: (Math.random() * 1_000_000_000).toString(),
      title,
      isDone: index < 3,
    }))
  },
  {
    slug: 'css-flex',
    title:
      'css flex의 direction, grow & shrink, wrap, justify 등을 활용해서 layout을 만들 수 있습니다',
    skillSlugs: ['frontend', 'css'],
    icon: 'rectangleGroup',
    pieces: [
      'pwd, ls, cd, tree 명령어로 파일 시스템을 탐색할 수 있습니다',
      'cp, mv, rm 명령어로 파일을 복사, 이동, 삭제할 수 있습니다',
      'mkdir과 -r flag로 디렉토리를 다룰 수 있습니다',
      'ln으로 링크를 생성하고 활용할 수 있습니다',
      '상대 경로와 절대 경로를 이해하고 활용할 수 있습니다',
      '. 으로 시작하는 숨김 파일을 다룰 수 있습니다',
      '파일을 다룰 때 흔한 실수를 알고 예방할 수 있습니다',
    ].map((title, index) => ({
      id: (Math.random() * 1_000_000_000).toString(),
      title,
      isDone: index < 3,
    }))
  },
  {
    slug: 'component-testing-library',
    title: '컴포넌트를 testing-library를 이용해서 테스트할 수 있습니다',
    skillSlugs: ['frontend', 'test'],
    icon: 'magnifyingGlass',
    pieces: [
      'pwd, ls, cd, tree 명령어로 파일 시스템을 탐색할 수 있습니다',
      'cp, mv, rm 명령어로 파일을 복사, 이동, 삭제할 수 있습니다',
      'mkdir과 -r flag로 디렉토리를 다룰 수 있습니다',
      'ln으로 링크를 생성하고 활용할 수 있습니다',
      '상대 경로와 절대 경로를 이해하고 활용할 수 있습니다',
      '. 으로 시작하는 숨김 파일을 다룰 수 있습니다',
      '파일을 다룰 때 흔한 실수를 알고 예방할 수 있습니다',
    ].map((title, index) => ({
      id: (Math.random() * 1_000_000_000).toString(),
      title,
      isDone: index < 3,
    }))
  },
]

declare global {
  var __fakeBadgeList: BadgeT[] | undefined;
}

if (global.__fakeBadgeList === undefined) {
  global.__fakeBadgeList = fakeBadgeList;
}

export default global.__fakeBadgeList!;
