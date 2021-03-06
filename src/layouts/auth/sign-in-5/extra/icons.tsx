import React from 'react';
import { ImageProps } from 'react-native';
import { Icon, IconElement } from '@ui-kitten/components';

export const EmailIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='email'/>
);

export const LockIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='lock'/>
);

export const PhoneIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='phone'/>
);
