import react, { useState, useEffect } from 'react';
import { history, connect } from '@umijs/max';
import {
  List,
  InfiniteScroll,
  Button,
  Image,
  PullToRefresh,
} from 'antd-mobile';
import { mockRequest } from './mock-request';
import styles from './index.module.less';

let count = 0;

function ProjectList(props) {
  const { dispatch } = props;
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  async function loadMore() {
    if (count >= 2) {
      return;
    }
    const append = await mockRequest();
    count++;
    setData((val) => [...val, ...append]);
    setHasMore(false);
  }

  useEffect(() => {}, []);

  return (
    <>
      <div className={styles.list_header}>
        <div className={styles.list_header_title}>项目列表</div>
        <Button
          color="primary"
          size="small"
          onClick={() => {
            // TODO 跳转到新增页面
          }}
        >
          新增项目
        </Button>
      </div>
      <PullToRefresh
        onRefresh={async () => {
          count = 0;
          const append = await mockRequest();
          setData(append);
          count++;
          // setHasMore(append.length > 0);
        }}
      >
        <List className={styles.list_layout}>
          {data.map((item, index) => (
            <List.Item
              onClick={() => {
                dispatch({
                  type: 'projectDetail/setProjectDetail',
                  payload: item,
                });

                console.log('projectDetail/setProjectDetail', item);

                // TODO 跳转到详情
              }}
              key={item.projectId}
              prefix={
                <Image
                  src={require('./project.jpg')}
                  style={{ borderRadius: 8 }}
                  fit="cover"
                  width={60}
                  height={60}
                />
              }
              description={
                <>
                  <div>地址：{item.addressDetail}</div>
                  <div>创建时间：{item.createTime}</div>
                </>
              }
            >
              {item.projectName}
            </List.Item>
          ))}
        </List>
      </PullToRefresh>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </>
  );
}

const mapModelToProps = () => {
  return {};
};

export default connect(mapModelToProps)(ProjectList);
