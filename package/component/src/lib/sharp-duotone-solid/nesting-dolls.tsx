
import { Icon, generic } from "../../index";

/**
 * A component that renders the `nesting-dolls` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nesting-dolls?s=sharp-duotone-solid nesting-dolls}
 * @preview ![nesting-dolls](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/nesting-dolls.svg)
 */
const NestingDolls: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M80 112C80 50.1 130.1 0 192 0s112 50.1 112 112l0 144L80 256l0-144zm48-16.4c-.1 16.5 6.1 33.1 18.7 45.6c25 25 65.5 25 90.5 0c12.6-12.6 18.8-29.1 18.7-45.6c-28.2-2.8-52.1-20.3-64-44.7c-11.9 24.4-35.8 41.9-64 44.7zm256 256c2.6 .3 5.3 .4 8 .4c31.7 0 59-18.4 72-45.1c13 26.7 40.3 45.1 72 45.1c2.7 0 5.4-.1 8-.4l0 .4c0 10.2-2 20.5-5.9 30.1s-9.8 18.7-17.6 26.5C504.9 424.2 484.5 432 464 432s-40.9-7.8-56.6-23.4c-15.7-15.7-23.5-36.4-23.4-57z" />
        <path d="M336 384c0 48-48 128-48 128l352 0s-48-80-48-128l0-32c0-70.7-57.3-128-128-128s-128 57.3-128 128l0 32zm128-77.1c13 26.7 40.3 45.1 72 45.1c2.7 0 5.4-.1 8-.4c.1 20.6-7.7 41.2-23.4 57c-31.2 31.2-81.9 31.2-113.1 0c-15.7-15.7-23.5-36.4-23.4-57c2.6 .3 5.3 .4 8 .4c31.7 0 59-18.4 72-45.1zM260.6 495.5s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0l.1-.1 .3-.6c.3-.5 .8-1.3 1.4-2.4c1.2-2.1 3-5.2 5.1-9.1c4.3-7.8 9.9-18.6 15.5-30.8C295 426.5 304 400.3 304 384l0-32c0-36 11.9-69.3 32-96L42.3 256c-1.4 2.8-2.9 5.7-4.3 8.6c0 0 0 0 0 0s0 0 0 0C20.2 299.6 0 339.6 0 384c0 80 48 128 48 128l202.7 0 9.9-16.5z" />
    </Icon>
);

export default NestingDolls;