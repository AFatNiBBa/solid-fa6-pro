
import { Icon } from "../../index";

/**
 * A component that renders the `circle-phone` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-phone?s=sharp-thin circle-phone}
 * @preview ![circle-phone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-phone.svg)
 */
const CirclePhone: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM207 124.1l-2.9-5.2-5.8 1.3-72 16-6.3 1.4 0 6.4 0 16s0 0 0 0c0 128.1 103.9 232 232 232l16 0 6.4 0 1.4-6.3 16-72 1.3-5.8-5.2-2.9-72-40-5.9-3.3-4.2 5.3-29.3 36.6c-28.3-16.3-51.8-39.8-68.1-68.1L245 206.3l5.3-4.2-3.3-5.9-40-72zM136 160l0-9.6 59.9-13.3L229.7 198l-36.6 29.3-5.2 4.1 3.1 5.8c18.8 35.6 48.1 64.9 83.7 83.7l5.8 3.1 4.1-5.2L314 282.3l60.9 33.8L361.6 376l-9.6 0c-119.3 0-216-96.7-216-216c0 0 0 0 0 0z" />
    </Icon>
);

export default CirclePhone;