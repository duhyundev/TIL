import React from 'react';

export default function Test() {
  const [numOfItems, setNumOfItems] = useState({ minValue: 0, maxValue: 10 });
  const { minValue, maxValue } = numOfItems;
  /* ... */
  const handleChange = page => { // 페이지가 바뀔 때마다 실행되는 이벤트
    setNumOfItems({ minValue: (page - 1) * 10, maxValue: page * 10 });
  };

  const diaries = [1,2,3,4];

  return (
    <div>
          diaries
            .sort((a, b) => b.id - a.id) // 일기를 역순으로 정렬
            .slice(minValue, maxValue) // 1페이지일때 minValue: 0, maxValue:10. 2페이지일때는 각각 10, 20
            .map((diary, i) => {
              return (
                <Diary
                  diary={diary}
                  loading={loading}
                  key={i}
                  deleteDiary={deleteDiary}
                  editDiary={editDiary}
                />
              );
            })
        )}
        <Pagination
          size="small"
          hideOnSinglePage={true}
          pageSize={10}
          onChange={handleChange}
          total={diaries.length}
        ></Pagination>
    </div>
    )
}
