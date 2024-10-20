
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cannon` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cannon?s=sharp-duotone-solid cannon}
 * @preview ![cannon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cannon.svg)
 */
const Cannon: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 378.3l49.1-24.5c1 7.9 2.6 15.8 5 23.6c1.2 3.9 2.5 7.8 4 11.6c.8 1.9 1.6 3.8 2.4 5.7c.4 .9 .9 1.9 1.3 2.8c.4 .9 .9 1.9 1.4 2.8c7.5 15 17.3 28.2 28.8 39.3L42.9 464.2 0 378.3zM288 368c0-61.9 50.1-112 112-112c40.9 0 76.6 21.9 96.2 54.5C506.2 327.3 512 347 512 368c0 61.9-50.1 112-112 112c-37.4 0-70.6-18.4-90.9-46.6C295.8 415 288 392.4 288 368zm80 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M256.4 464.8c-71.1 35.6-157.6 6.7-193.2-64.4s-6.7-157.6 64.4-193.2C192 176 559 51.3 559 51.3l81 161.9s-65.9 45.1-143.8 97.4C476.6 277.9 440.9 256 400 256c-61.9 0-112 50.1-112 112c0 24.4 7.8 47 21.1 65.4c-23.2 14.6-41.7 25.7-52.7 31.4z" />
    </Icon>
);

export default Cannon;