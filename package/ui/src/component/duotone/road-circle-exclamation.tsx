
import { Icon, generic } from "../../index";

/**
 * A component that renders the `road-circle-exclamation` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/road-circle-exclamation?s=duotone road-circle-exclamation}
 * @preview ![road-circle-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/road-circle-exclamation.svg)
 */
const RoadCircleExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 425.4C32 455.5 56.5 480 86.6 480L288 480l0-64c0-17.7 14.3-32 32-32l.7 0c-.5-5.3-.7-10.6-.7-16c0-16.9 2.4-33.3 6.8-48.7c-2.2 .5-4.5 .7-6.8 .7c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 42.8c31.9-45.2 84.5-74.8 144-74.8c11.6 0 22.9 1.1 33.8 3.2L487.1 74.6C478 49.1 453.9 32 426.8 32L352 32l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64-74.8 0c-27.1 0-51.3 17.1-60.3 42.6L35.1 407.2c-2.1 5.9-3.1 12-3.1 18.2z" />
        <path d="M352 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm168 72a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm-8-152c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 80c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80z" />
    </Icon>
);

export default RoadCircleExclamation;