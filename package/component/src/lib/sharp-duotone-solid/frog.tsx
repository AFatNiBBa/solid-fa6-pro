
import { Icon, generic } from "../../index";

/**
 * A component that renders the `frog` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/frog?s=sharp-duotone-solid frog}
 * @preview ![frog](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/frog.svg)
 */
const Frog: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 416l0 32 0 32 32 0 288 0 32 0 0-64-32 0-58.2 0 37.1-37.1c3.4-3.4 6.4-7.1 9-10.9c18.7-28 15.7-66.2-9-90.9c-24.6-24.6-62.6-27.7-90.5-9.2c-4 2.6-7.8 5.7-11.3 9.2c-.2 .2-.2 .2-.3 .3L123 347.6l-11.6 11L89.4 335.4l11.6-11 73.6-70.1c40.6-40.5 106.4-40.4 146.9 .1c28.6 28.6 37.1 69.7 25.4 105.7L457.4 470.6l9.4 9.4 13.3 0 64 0 32 0 0-64-32 0-50.7 0-92.5-92.5L576 224l0-80L447.7 104.5c.2 2.5 .3 5 .3 7.5c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-1.2 0-2.5 .1-3.7s.1-2.5 .3-3.7c.2-2.4 .6-4.8 1-7.2C127 112.9 0 249.6 0 416z" />
        <path d="M368 192a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-104a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Frog;