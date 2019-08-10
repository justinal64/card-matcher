/**
 * @class Button
 */

import * as React from "react";

// type Props = { text: string; class: btnType; onclick?: function };

interface Props {
  onclick?: any; // TODO: This needs to be fixed...
}

export function Card(props: Props) {

  return (
    <p>
      This is a card
    </p>
  );
}
