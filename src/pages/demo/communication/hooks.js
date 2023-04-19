import React, { useState } from "react";
import { DatePicker } from "antd";
// import "moment/locale/zh-cn";
// import locale from "antd/es/date-picker/locale/zh_CN";
import "dayjs/locale/zh-cn";
import locale from "antd/es/date-picker/locale/zh_CN";
export default function Hooks() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
      <DatePicker.RangePicker locale={locale} />
    </div>
  );
}
