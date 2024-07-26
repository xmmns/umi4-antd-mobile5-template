import { sleep } from 'antd-mobile/es/utils/sleep';
import mockjs, { Random } from 'mockjs';

export async function mockRequest() {
  await sleep(2000);
  const data = mockjs.mock({
    'list|2-10': [
      {
        address: [],
        addressDetail: Random.county(true),
        'projectName|4-8': '@cword()',
        createTime: Random.date('yyyy-MM-dd'),
        'projectId|+1': 1,
      },
    ],
  });

  return data.list;

}
