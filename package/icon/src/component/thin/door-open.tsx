
import { Icon } from "../../index";

/**
 * A component that renders the `door-open` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/door-open?s=thin door-open}
 * @preview ![door-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/door-open.svg)
 */
const DoorOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M304 496L96 496l-16 0L80 86.2C80 71.3 90.3 58.4 104.8 55l166-38.3c2-.5 4-.7 6.1-.7c15 0 27.1 12.1 27.1 27.1L304 496zM64 86.2L64 496 8 496c-4.4 0-8 3.6-8 8s3.6 8 8 8l56 0 16 0 16 0 208 0 16 0 0-16 0-452.9C320 19.3 300.7 0 276.9 0c-3.3 0-6.5 .4-9.7 1.1l-166 38.3C79.4 44.4 64 63.8 64 86.2zM472 80c13.3 0 24 10.7 24 24l0 400c0 4.4 3.6 8 8 8l64 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-56 0 0-392c0-22.1-17.9-40-40-40L352 64l0 16 120 0zM232 216c-9.7 0-17.9 5.3-23.4 12.6s-8.6 17-8.6 27.4s3.2 20.1 8.6 27.4s13.7 12.6 23.4 12.6s17.9-5.3 23.4-12.6s8.6-17 8.6-27.4s-3.2-20.1-8.6-27.4s-13.7-12.6-23.4-12.6zm-16 40c0-7.2 2.2-13.5 5.4-17.8s7-6.2 10.6-6.2s7.4 1.9 10.6 6.2s5.4 10.6 5.4 17.8s-2.2 13.5-5.4 17.8s-7 6.2-10.6 6.2s-7.4-1.9-10.6-6.2s-5.4-10.6-5.4-17.8z" />
    </Icon>
);

export default DoorOpen;