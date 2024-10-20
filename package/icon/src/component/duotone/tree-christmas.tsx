
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tree-christmas` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tree-christmas?s=duotone tree-christmas}
 * @preview ![tree-christmas](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/tree-christmas.svg)
 */
const TreeChristmas: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 487.1C0 500.9 11.1 512 24.9 512l398.3 0c13.7 0 24.9-11.1 24.9-24.9c0-4.7-1.3-9.2-3.8-13.2L368 352l32.3 0c13.1 0 23.7-10.6 23.7-23.7c0-5.4-1.8-10.6-5.2-14.8L252.7 105.9c-.7 .3-1.4 .5-2.1 .8c-5.9 15.7-11.8 31.4-17.7 47.1c-1.4 3.8-5 6.2-9 6.2s-7.6-2.5-9-6.2c-5.9-15.7-11.8-31.4-17.7-47.1c-.7-.3-1.4-.5-2.1-.8L29.2 313.5c-3.4 4.2-5.2 9.4-5.2 14.8C24 341.4 34.6 352 47.7 352L80 352 3.8 474c-2.5 4-3.8 8.5-3.8 13.2zM184 288a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm80 128c0-.4 0-.8 0 0z" />
        <path d="M150.2 71l47.1-17.7L215 6.2c1.4-3.8 5-6.2 9-6.2s7.6 2.5 9 6.2l17.7 47.1L297.8 71c3.8 1.4 6.2 5 6.2 9s-2.5 7.6-6.2 9l-47.1 17.7L233 153.8c-1.4 3.8-5 6.2-9 6.2s-7.6-2.5-9-6.2l-17.7-47.1L150.2 89c-3.8-1.4-6.2-5-6.2-9s2.5-7.6 6.2-9zM288 392a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default TreeChristmas;