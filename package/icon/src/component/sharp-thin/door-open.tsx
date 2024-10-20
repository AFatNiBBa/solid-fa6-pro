
import { Icon } from "../../index";

/**
 * A component that renders the `door-open` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/door-open?s=sharp-thin door-open}
 * @preview ![door-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/door-open.svg)
 */
const DoorOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M320 0L304 4 64 64l0 432L8 496l-8 0 0 16 8 0 56 0 16 0 16 0 208 0 16 0 0-16 0-479.5L320 0zM96 496l-16 0L80 76.5l224-56L304 496 96 496zM496 80l0 424 0 8 8 0 64 0 8 0 0-16-8 0-56 0 0-424 0-8-8 0L352 64l0 16 144 0zM232 216c-9.7 0-17.9 5.3-23.4 12.6s-8.6 17-8.6 27.4s3.2 20.1 8.6 27.4s13.7 12.6 23.4 12.6s17.9-5.3 23.4-12.6s8.6-17 8.6-27.4s-3.2-20.1-8.6-27.4s-13.7-12.6-23.4-12.6zm-16 40c0-7.2 2.2-13.5 5.4-17.8s7-6.2 10.6-6.2s7.4 1.9 10.6 6.2s5.4 10.6 5.4 17.8s-2.2 13.5-5.4 17.8s-7 6.2-10.6 6.2s-7.4-1.9-10.6-6.2s-5.4-10.6-5.4-17.8z" />
    </Icon>
);

export default DoorOpen;