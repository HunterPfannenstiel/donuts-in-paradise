import { ComponentPropsWithoutRef, ComponentType, ElementType } from "react";

type AsProp<C extends ComponentType> = { as?: C };

type OmitProps<C extends ComponentType, Props> = keyof (AsProp<C> & Props);

export type PolymorphicComponent<C extends ComponentType, Props = {}> = Omit<
  ComponentPropsWithoutRef<C>,
  OmitProps<C, Props>
> &
  AsProp<C> &
  Props;
