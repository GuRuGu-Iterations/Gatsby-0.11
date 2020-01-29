import React, { Fragment } from "react";
import { Styled } from "theme-ui";

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    Let's meet! My name is <Styled.a href="http://example.com/">Peter</Styled.a>
    {` `}
    .
    <br />
    I'm kind of a creator who doesn't create anything :-/.
  </Fragment>
);
