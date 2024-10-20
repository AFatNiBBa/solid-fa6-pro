
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mars-and-venus-burst` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mars-and-venus-burst?s=sharp-duotone-solid mars-and-venus-burst}
 * @preview ![mars-and-venus-burst](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/mars-and-venus-burst.svg)
 */
const MarsAndVenusBurst: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M4.4 215.2L100 236.6l-.4 98L176 273.2l76.4 61.4-.2-49.3C244.3 266.4 240 245.7 240 224c0-3.1 .1-6.1 .3-9.1c.2-3 .4-6 .7-8.9c.7-5.9 1.6-11.7 2.9-17.4c2.6-11.4 6.4-22.3 11.2-32.6c9.7-20.7 23.7-38.9 40.9-53.6l17.6-36.1L218.2 88.5 176 0 133.8 88.5 38.4 66.3l42.9 88.1L4.4 215.2z" />
        <path d="M512 0L640 0l0 128-32 32-47-47-25.6 25.6C551 163.3 560 192.6 560 224c0 80.2-59 146.6-136 158.2l0 1.8 0 24 24 0 24 0 0 48-24 0-24 0 0 32 0 24-48 0 0-24 0-32-24 0-24 0 0-48 24 0 24 0 0-24 0-1.8c-77-11.6-136-78-136-158.2c0-88.4 71.6-160 160-160c39.6 0 75.9 14.4 103.8 38.2L527 79 480 32 512 0zM496 224a96 96 0 1 0 -192 0 96 96 0 1 0 192 0z" />
    </Icon>
);

export default MarsAndVenusBurst;