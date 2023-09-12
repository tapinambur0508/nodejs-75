// @flow
import * as React from "react";

const SERVER_URL = "http://localhost:8081";

type Props = {
  avatar: string,
  name: string,
};

function Avatar({ avatar, name }: Props): React.Node {
  return <img src={`${SERVER_URL}/avatars/${avatar}`} alt={name} />;
}

export default Avatar;
