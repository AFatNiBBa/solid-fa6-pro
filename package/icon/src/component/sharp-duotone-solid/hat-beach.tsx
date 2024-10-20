
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hat-beach` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hat-beach?s=sharp-duotone-solid hat-beach}
 * @preview ![hat-beach](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hat-beach.svg)
 */
const HatBeach: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M160 224c0 35.3 71.6 64 160 64c23 0 44.9-1.9 64.7-5.4c3.7 21.3 22.3 37.4 44.6 37.4c12 0 23.5-4.8 32-13.3L464 304l2.7 2.7c8.5 8.5 20 13.3 32 13.3c25 0 45.3-20.3 45.3-45.3c0-10.9-3.9-21.3-11-29.5c-.7-.9-1.5-1.7-2.3-2.5L528 240l2.7-2.7c8.5-8.5 13.3-20 13.3-32c0-25-20.3-45.3-45.3-45.3c-10.3 0-20.2 3.5-28.2 9.8c-1.3 1.1-2.6 2.2-3.8 3.4L464 176l-2.7-2.7c-8.5-8.5-20-13.3-32-13.3c-25 0-45.3 20.3-45.3 45.3c0 4.5 .7 9 2 13.2c-20 3.5-42.3 5.5-66 5.5c-79.9 0-145.3-22.7-151.5-51.5C163 188.6 160 206 160 224zm272 16l32-32 32 32-32 32-32-32z" />
        <path d="M320 448c176.7 0 320-57.3 320-128l0-32L533 245.2c7 8.2 11 18.7 11 29.5c0 25-20.3 45.3-45.3 45.3c-12 0-23.5-4.8-32-13.3L464 304l-2.7 2.7c-8.5 8.5-20 13.3-32 13.3c-22.3 0-40.9-16.2-44.6-37.4C364.9 286.1 343 288 320 288c-88.4 0-160-28.7-160-64L0 288l0 32c0 70.7 143.3 128 320 128zM470.6 169.8C448.4 108.1 389.3 64 320 64c-70.3 0-130.1 45.4-151.5 108.5C174.7 201.3 240.1 224 320 224c23.6 0 46-2 66-5.5c-1.3-4.2-2-8.7-2-13.2c0-25 20.3-45.3 45.3-45.3c12 0 23.5 4.8 32 13.3L464 176l2.7-2.7c1.2-1.2 2.5-2.4 3.8-3.4z" />
    </Icon>
);

export default HatBeach;