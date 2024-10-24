
import { Icon } from "../../index";

/**
 * A component that renders the `shovel` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shovel?s=sharp-solid shovel}
 * @preview ![shovel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/shovel.svg)
 */
const Shovel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M338.7 45.3L384 0l45.3 45.3 37.5 37.5L512 128l-45.3 45.3-24.2 24.2c-17 17-40 26.5-64 26.5c-13.3 0-25.9-2.9-37.3-8L238.6 318.6 304 384 176 512 0 512 0 336 128 208l65.4 65.4L296 170.7c-5.1-11.4-8-24-8-37.3c0-24 9.5-47 26.5-64l24.2-24.2zM421.5 128L384 90.5l-24.2 24.2c-5 5-7.8 11.7-7.8 18.7c0 14.6 11.9 26.5 26.5 26.5c7 0 13.8-2.8 18.7-7.8L421.5 128z" />
    </Icon>
);

export default Shovel;