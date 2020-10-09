import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

import React from 'react';
import styled from 'styled-components';
import {
  Button as BlueprintjsButton,
  Intent,
  FocusStyleManager,
  MaybeElement,
} from '@blueprintjs/core';
import { IconName } from '@blueprintjs/icons';
FocusStyleManager.onlyShowFocusOnTabs();

const ButtonWrapper = styled.div``;

interface IButtonProps {
  iconName?: IconName | MaybeElement;
  active?: boolean;
  disabled?: boolean;
  iconOnly?: boolean;
  intent?: Intent;
  loading?: boolean;
  large?: boolean;
  minimal?: boolean;
  outlined?: boolean;
  wiggling?: boolean;
}

const Button: React.FC<IButtonProps> = (props) => {
  const body = 'Example';
  return (
    <ButtonWrapper>
      <BlueprintjsButton {...props}>{body}</BlueprintjsButton>
    </ButtonWrapper>
  );
};

export default Button;
