import { describe, it, expect } from 'vitest';
import { screen, getAllByRole } from '@testing-library/dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import createOptionalDataList from './createDataList';

const DataList = createOptionalDataList<{ name: string }>({
  selectId: el => el.name,
  Item({data}) {
    return <span>이름: {data.name}</span>
  },
})


describe('createOptionalDataList', () => {
  it('render with heading', async () => {
    const dataList = [{name:'taehee'}, {name:'tamjung'}];
    render(
      <DataList title="테스트 목록" dataList={dataList} />
    );

    const $list = screen.getByLabelText('테스트 목록');

    expect($list.tagName).toBe('UL');

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const $items = getAllByRole($list, 'listitem');
    $items.forEach(($item, i) => {
      expect($item).toHaveTextContent('이름: '+dataList[i].name)
    })
  });
});
