import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

export default createSchema({
  name: "default",

  type: schemaTypes.concat([
    // your types here
  ]),
});
