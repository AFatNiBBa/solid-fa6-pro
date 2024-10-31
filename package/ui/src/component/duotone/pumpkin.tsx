
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pumpkin` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pumpkin?s=duotone pumpkin}
 * @preview ![pumpkin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/pumpkin.svg)
 */
const Pumpkin: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 320C0 426 68.1 512 152 512c19.3 0 37.8-4.5 54.7-12.8c8.3-4.1 18.2-4.1 26.5 0c17 8.3 35.4 12.8 54.7 12.8s37.8-4.5 54.7-12.8c8.3-4.1 18.2-4.1 26.5 0c17 8.3 35.4 12.8 54.7 12.8c83.9 0 152-86 152-192s-68.1-192-152-192c-8.9 0-17.6 1-26 2.8c-.6 .1-1.2 .2-1.8 .3c12.1 8.8 23.1 19.1 32.7 30.5c5.6 6.7-2.9 14.6-10.4 10.1C380.3 149 335.7 136 288 136s-92.3 13-130.5 35.7c-7.5 4.5-16-3.4-10.4-10.1c9.6-11.4 20.6-21.7 32.7-30.5c-.6-.1-1.2-.2-1.8-.3c-8.5-1.8-17.2-2.8-26-2.8C68.1 128 0 214 0 320z" />
        <path d="M234.6 103.9l40.9-93.5c2.8-6.3 9-10.4 15.8-10.4l1.2 0c2.3 0 4.7 .5 6.8 1.4l42.3 18.1c6.4 2.7 10.5 9 10.5 15.9l0 72C332.1 100 310.5 96 288 96c-18.6 0-36.5 2.8-53.5 7.9z" />
    </Icon>
);

export default Pumpkin;