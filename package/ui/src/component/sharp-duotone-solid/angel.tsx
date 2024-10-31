
import { Icon, generic } from "../../index";

/**
 * A component that renders the `angel` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angel?s=sharp-duotone-solid angel}
 * @preview ![angel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/angel.svg)
 */
const Angel: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 160L0 280l48 72L0 456l0 56 96 0L224 256l24 0-96-96L0 160zM160 64c0 14 9 27 24.3 37.5c4.1-10 9.6-19.3 16.3-27.7c-2.7-2-4.8-4-6.2-5.6c-1.4-1.7-2-2.8-2.3-3.5c-.1-.3-.2-.5-.2-.6c0-.2 0-.3 0-.3s.1-.3 .2-.6c.3-.6 .9-1.8 2.3-3.5c2.9-3.5 8.4-7.9 17.3-12.4C229.6 38.4 256.5 32 288 32s58.4 6.4 76.2 15.4c8.9 4.5 14.4 8.9 17.3 12.4c1.4 1.7 2 2.8 2.3 3.5c.1 .3 .2 .5 .2 .6c0 .2 0 .3 0 .3s-.1 .3-.2 .6c-.3 .6-.9 1.8-2.3 3.5c-1.4 1.7-3.4 3.6-6.2 5.6c6.7 8.3 12.2 17.6 16.3 27.7C407 91 416 78 416 64c0-35.3-57.3-64-128-64S160 28.7 160 64zM328 256l24 0L480 512l96 0 0-56L528 352l48-72 0-120-152 0-96 96z" />
        <path d="M288 64a80 80 0 1 1 0 160 80 80 0 1 1 0-160zM96 512L224 256l128 0L480 512 96 512z" />
    </Icon>
);

export default Angel;