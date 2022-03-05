import React from "react";

import Myinput from "./UI/input/Myinput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <Myinput
        value={filter.query}
        placeholder="Search..."
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />

      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="sorting"
        options={[
          { value: "title", name: "by name" },
          { value: "body", name: "by description" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
