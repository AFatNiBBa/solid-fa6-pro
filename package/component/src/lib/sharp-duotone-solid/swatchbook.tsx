
import { Icon, generic } from "../../index";

/**
 * A component that renders the `swatchbook` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/swatchbook?s=sharp-duotone-solid swatchbook}
 * @preview ![swatchbook](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/swatchbook.svg)
 */
const Swatchbook: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 416.6l0 .6C0 469.6 42.4 512 94.7 512l1.3 0C46.3 512 5.4 474.2 .5 425.8c-.3-3-.5-6.1-.5-9.2zM64 64l64 0 0 64-64 0 0-64zm0 128l64 0 0 64-64 0 0-64zM96 512c3.3 0 6.6-.2 9.8-.5c24.2-2.5 45.8-13.9 61.2-31c7.7-8.5 14-18.4 18.3-29.3c2.1-5.4 3.8-11.1 4.9-17c.6-2.9 1-5.9 1.3-9c.1-1.5 .3-3 .3-4.6s.1-3.1 .1-4.6l0-230L322 56 457.8 191.8C368.4 281.1 279.1 370.5 189.6 460l-23.5 23.5c-18.2 18.2-43 28.5-68.8 28.5L96 512zm86.8 0l192-192L512 320l0 192-329.2 0z" />
        <path d="M192 0L0 0 0 416c0 53 43 96 96 96s96-43 96-96L192 0zM128 64l0 64-64 0 0-64 64 0zM64 192l64 0 0 64-64 0 0-64zM96 392a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Swatchbook;