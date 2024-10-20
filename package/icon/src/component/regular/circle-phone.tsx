
import { Icon } from "../../index";

/**
 * A component that renders the `circle-phone` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-phone?s=regular circle-phone}
 * @preview ![circle-phone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-phone.svg)
 */
const CirclePhone: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM186.7 128.7l-44 12C134 143.1 128 151 128 160c0 123.7 100.3 224 224 224c9 0 16.9-6 19.3-14.7l12-44c2.6-9.7-2.3-19.9-11.6-23.7l-48-20c-8.2-3.4-17.6-1-23.2 5.8L280.3 312c-35.2-16.6-63.7-45.1-80.3-80.3l24.7-20.2c6.8-5.6 9.2-15 5.8-23.2l-20-48c-3.9-9.3-14-14.2-23.7-11.6z" />
    </Icon>
);

export default CirclePhone;