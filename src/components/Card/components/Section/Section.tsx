import * as React from 'react';
import {classNames} from '@shopify/css-utilities';
import {DisableableAction} from '../../../../types';
import {buttonsFrom} from '../../../Button';
import Stack from '../../../Stack';
import ButtonGroup from '../../../ButtonGroup';

import Subheading from '../../../Subheading';

import styles from '../../Card.scss';

export interface Props {
  title?: React.ReactNode;
  children?: React.ReactNode;
  subdued?: boolean;
  fullWidth?: boolean;
  actions?: DisableableAction[];
}

export default function Section({
  children,
  title,
  subdued,
  fullWidth,
  actions,
}: Props) {
  const className = classNames(
    styles.Section,
    subdued && styles['Section-subdued'],
    fullWidth && styles['Section-fullWidth'],
  );

  const actionMarkup = actions ? (
    <ButtonGroup>{buttonsFrom(actions, {plain: true})}</ButtonGroup>
  ) : null;

  const titleMarkup =
    typeof title === 'string' ? <Subheading>{title}</Subheading> : title;

  return (
    <div className={className}>
      {titleMarkup || actionMarkup ? (
        <div className={styles.SectionHeader}>
          {actionMarkup ? (
            <Stack alignment="baseline">
              <Stack.Item fill>{titleMarkup}</Stack.Item>
              {actionMarkup}
            </Stack>
          ) : (
            titleMarkup
          )}
        </div>
      ) : null}
      {children}
    </div>
  );
}
