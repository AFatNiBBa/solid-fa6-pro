
import { Icon, generic } from "../../index";

/**
 * A component that renders the `badge-percent` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/badge-percent?s=sharp-duotone-solid badge-percent}
 * @preview ![badge-percent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/badge-percent.svg)
 */
const BadgePercent: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256c0 36.8 20.7 68.8 51.1 84.9C41 373.8 49 411 75 437s63.3 34 96.1 23.9C187.2 491.3 219.2 512 256 512s68.8-20.7 84.9-51.1C373.8 471 411 463 437 437s34-63.3 23.9-96.1C491.3 324.8 512 292.8 512 256s-20.7-68.8-51.1-84.9C471 138.2 463 101 437 75s-63.3-34-96.1-23.9C324.8 20.7 292.8 0 256 0s-68.8 20.7-84.9 51.1C138.2 41 101 49 75 75s-34 63.3-23.9 96.1C20.7 187.2 0 219.2 0 256zm158.1 64l17-17c42.7-42.7 85.3-85.3 128-128l17-17c11.3 11.3 22.6 22.6 33.9 33.9c-5.7 5.7-11.3 11.3-17 17c-42.7 42.7-85.3 85.3-128 128c-5.7 5.7-11.3 11.3-17 17c-11.3-11.3-22.6-22.6-33.9-33.9zM160 192c0-17.7 14.3-32 32-32c8.8 0 16.8 3.6 22.6 9.4c2.9 2.9 5.2 6.3 6.9 10.2c.8 1.9 1.4 3.9 1.9 6c.2 1 .4 2.1 .5 3.2c.1 .5 .1 1.1 .1 1.6s0 1.1 0 1.6c0 1.1 0 1.4 0 1.7c0 .5-.1 1.1-.1 1.6c-.1 1.1-.3 2.1-.5 3.2c-.4 2.1-1.1 4.1-1.9 6c-1.6 3.8-4 7.3-6.9 10.2c-5.8 5.8-13.8 9.4-22.6 9.4c-17.7 0-32-14.3-32-32zM352 320a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M337 209l17-17L320 158.1l-17 17L175 303l-17 17L192 353.9l17-17L337 209zM224 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM352 320a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default BadgePercent;