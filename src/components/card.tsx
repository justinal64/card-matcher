/**
 * @class Button
 */

import * as React from "react";
import "./styles.css"

interface Props {
  onclick?: any; // TODO: This needs to be fixed...
}

export function Card(props: Props) {

  return (
    <div className="card">
      <img src="https://cdn.mos.cms.futurecdn.net/sYGVH9XWiB85hzV22gBhpd-602-80.jpg"></img>
      <div className="body">
        Body
      </div>
    </div>
  );
}
