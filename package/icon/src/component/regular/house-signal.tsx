
import { Icon } from "../../index";

/**
 * A component that renders the `house-signal` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-signal?s=regular house-signal}
 * @preview ![house-signal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/house-signal.svg)
 */
const HouseSignal: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M320.8 5.4c8.8-7.2 21.5-7.2 30.3 0l216 176c10.3 8.4 11.8 23.5 3.4 33.8s-23.5 11.8-33.8 3.4L512 198.4 512 360c0 30.9-25.1 56-56 56l-177.9 0c-4.7-16.7-11.1-32.8-18.8-48L456 368c4.4 0 8-3.6 8-8l0-200.7L336 55 208 159.3l0 139.4c-14.5-14.1-30.6-26.5-48-37l0-63.3-24.8 20.2c-10.3 8.4-25.4 6.8-33.8-3.4s-6.8-25.4 3.4-33.8l216-176zM312 192l48 0c13.3 0 24 10.7 24 24l0 48c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-48c0-13.3 10.7-24 24-24zM24 256c128.1 0 232 103.9 232 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM0 376c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default HouseSignal;