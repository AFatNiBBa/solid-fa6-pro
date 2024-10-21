
import { Icon } from "../../index";

/**
 * A component that renders the `angel` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angel?s=sharp-solid angel}
 * @preview ![angel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/angel.svg)
 */
const Angel: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M384 64.2c0 .1-.1 .3-.2 .6c-.3 .6-.9 1.8-2.3 3.5c-1.4 1.7-3.4 3.6-6.2 5.6c6.7 8.3 12.2 17.6 16.3 27.7C407 91 416 78 416 64c0-35.3-57.3-64-128-64S160 28.7 160 64c0 14 9 27 24.3 37.5c4.1-10 9.6-19.3 16.3-27.7c-2.7-2-4.8-4-6.2-5.6c-1.4-1.7-2-2.8-2.3-3.5c-.1-.3-.2-.5-.2-.6s0-.1 0-.2s0-.1 0-.2s.1-.3 .2-.6c.3-.6 .9-1.8 2.3-3.5c2.9-3.5 8.4-7.9 17.3-12.4C229.6 38.4 256.5 32 288 32s58.4 6.4 76.2 15.4c8.9 4.5 14.4 8.9 17.3 12.4c1.4 1.7 2 2.8 2.3 3.5c.1 .3 .2 .5 .2 .6s0 .1 0 .2s0 .1 0 .2zM368 144a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM209.4 285.3L120 464l-70.8 0 42.4-91.9 11.3-24.4L87.9 325.4 48 265.5 48 208l84.1 0 77.3 77.3zM248 256l-96-96L48 160 0 160l0 48 0 72 48 72L0 456l0 8 0 48 48 0 48 0 96 0 192 0 96 0 48 0 48 0 0-48 0-8L528 352l48-72 0-72 0-48-48 0-104 0-96 96-80 0zM526.8 464L456 464 366.6 285.3 443.9 208l84.1 0 0 57.5-39.9 59.9-14.9 22.4 11.3 24.4L526.8 464z" />
    </Icon>
);

export default Angel;