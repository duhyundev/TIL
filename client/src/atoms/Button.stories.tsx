import React from 'react';
import Button from './Button';
import { Intent } from '@blueprintjs/core';

export default {
  title: 'Atoms|Button',
  component: Button,
};

export const NoneButton = () => <Button intent={Intent.NONE} />;
export const PrimaryButton = () => <Button intent={Intent.PRIMARY} />;
export const DangerButton = () => <Button intent={Intent.DANGER} />;
export const SuccessButton = () => <Button intent={Intent.SUCCESS} />;
