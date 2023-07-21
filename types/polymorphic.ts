import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ComponentType,
  ElementType,
} from "react";

export type AsProp<C extends ComponentType<any>> = { as?: C };

type OmitProps<C extends ComponentType<any>, Props> = keyof (AsProp<C> & Props);

export type PolymorphicComponent<
  C extends ComponentType<any>,
  Props = {}
> = Omit<ComponentPropsWithoutRef<C>, OmitProps<C, Props>> & AsProp<C> & Props;

type PolymorphicRef<C extends ComponentType<any>> =
  ComponentPropsWithRef<C>["ref"];

export type PolymorphicComponentWithRef<
  C extends ComponentType<any>,
  Props
> = PolymorphicComponent<C, Props> & { ref?: PolymorphicRef<C> };
