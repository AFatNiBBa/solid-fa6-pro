
import { Icon, generic } from "../../index";

/**
 * A component that renders the `carrot` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/carrot?s=duotone carrot}
 * @preview ![carrot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/carrot.svg)
 */
const Carrot: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 488c0 6.2 2.4 12.4 7 17c7.1 7.1 17.9 9 27.1 4.8l134.7-62.4-52.1-52.1c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L199.7 433l100.2-46.4c46.4-21.5 76.2-68 76.2-119.2C376 194.8 317.2 136 244.6 136c-40 0-77.1 18.1-101.7 48.2l60.5 60.5c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-55.3-55.3C84.3 300.7 43.3 389.3 2.2 477.9C.7 481.1 0 484.6 0 488z" />
        <path d="M320 72c0-29.7 17.6-55 26.7-66c3.3-4 8.2-6 13.3-6s10 2 13.2 6C382.3 17.4 400 44.3 400 80c0 32-8 40-8 40s8-8 40-8c35.7 0 62.6 17.7 74 26.8c4 3.2 6 8.1 6 13.2s-2 10-6 13.3C495 174.4 469.7 192 440 192c-40 0-55.3-15.3-80-40s-40-40-40-80z" />
    </Icon>
);

export default Carrot;