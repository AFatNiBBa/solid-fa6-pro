
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hat-santa` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hat-santa?s=duotone hat-santa}
 * @preview ![hat-santa](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hat-santa.svg)
 */
const HatSanta: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64s-28.7-64-64-64L64 352c-35.3 0-64 28.7-64 64zM480 240c0 12.7 9.8 23 22.2 23.9c-8.1 9.4-7.7 23.7 1.2 32.6s23.2 9.4 32.6 1.2C537 310.2 547.3 320 560 320s23-9.8 23.9-22.2c9.4 8.1 23.7 7.7 32.6-1.2s9.4-23.2 1.2-32.6C630.2 263 640 252.7 640 240s-9.8-23-22.2-23.9c8.1-9.4 7.7-23.7-1.2-32.6s-23.2-9.4-32.6-1.2C583 169.8 572.7 160 560 160s-23 9.8-23.9 22.2c-7.7-6.7-18.7-7.6-27.3-2.8c-1.9 1.1-3.7 2.4-5.3 4c-8.9 8.9-9.4 23.2-1.2 32.6c-3.9 .3-7.5 1.5-10.7 3.4c-6.9 4.2-11.6 11.8-11.6 20.5z" />
        <path d="M64 352l85.7-214.2C175.2 73.9 237.1 32 305.9 32c49.5 0 96.5 21.8 128.5 59.6l74.3 87.8c-1.9 1.1-3.7 2.4-5.3 4c-8.9 8.9-9.4 23.2-1.2 32.6c-3.9 .3-7.5 1.5-10.7 3.4L402 192.6c-1.3-.4-2.7-.6-4-.6l-.8 0c-7.3 0-13.2 5.9-13.2 13.2c0 1.8 .4 3.7 1.1 5.4L448 352 64 352z" />
    </Icon>
);

export default HatSanta;