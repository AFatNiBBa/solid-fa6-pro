
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dollar-sign` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dollar-sign?s=duotone dollar-sign}
 * @preview ![dollar-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/dollar-sign.svg)
 */
const DollarSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M128 32l0 35.3c20.4-2.7 42.1-2.5 64 .3L192 32c0-17.7-14.3-32-32-32s-32 14.3-32 32zm0 413.1l0 34.9c0 17.7 14.3 32 32 32s32-14.3 32-32l0-33.4c-10.2 1.2-20.7 1.6-31.4 1.3c-10.7-.3-21.6-1.2-32.6-2.8z" />
        <path d="M108.5 137.8c-19.4 7.7-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3c.9 .3 1.9 .5 2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-31.6 12.9-70.3 15.2-109.7 9.3l-.2 0s0 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.2-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.4 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3c-.9-.2-1.8-.5-2.8-.7C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c32.4-12.9 72.1-15.9 111.9-10c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2z" />
    </Icon>
);

export default DollarSign;