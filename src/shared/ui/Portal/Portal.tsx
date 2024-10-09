import React from 'react';
import { createPortal } from 'react-dom';
import cls from './Portal.module.scss';

interface Props {
    children: React.ReactNode;
    element?: HTMLElement;
}

export const Portal: React.FC<Props> = ({
    children,
    element = document.body,
}) => createPortal(children, element);
