
import { Icon } from "../../index";

/**
 * A component that renders the `sleigh` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sleigh?s=regular sleigh}
 * @preview ![sleigh](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/sleigh.svg)
 */
const Sleigh: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M24 32C10.7 32 0 42.7 0 56S10.7 80 24 80l8 0 0 176c0 62.5 44.8 114.5 104 125.8l0 50.2-80 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l504 0c44.2 0 80-35.8 80-80l0-16c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 16c0 17.7-14.3 32-32 32l-120 0 0-48.2C507 379.6 560 324 560 256l0-112 24 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-24 0-24 0-24 0-56 0c-22.1 0-40 17.9-40 40l0 45.7c0 23.3-18.9 42.3-42.3 42.3c-58.3 0-112.5-30-143.4-79.5l-18.9-30.2C182.5 67.9 133.7 38.1 80 32.8c-5.1-.5-10.2-.8-15.4-.8L64 32l-1 0L32 32l-8 0zM392 432l-208 0 0-48 208 0 0 48zm40-96l-40 0-208 0-24 0c-44.2 0-80-35.8-80-80L80 81.1c37.2 5 70.5 26.3 90.7 58.6L189.6 170c39.7 63.5 109.2 102 184.1 102c49.9 0 90.3-40.4 90.3-90.3l0-37.7 48 0 0 112c0 44.2-35.8 80-80 80z" />
    </Icon>
);

export default Sleigh;