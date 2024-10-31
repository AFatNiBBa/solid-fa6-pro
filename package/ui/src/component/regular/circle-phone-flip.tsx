
import { Icon } from "../../index";

/**
 * A component that renders the `circle-phone-flip` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-phone-flip?s=regular circle-phone-flip}
 * @preview ![circle-phone-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-phone-flip.svg)
 */
const CirclePhoneFlip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 464a208 208 0 1 0 0-416 208 208 0 1 0 0 416zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm69.3 128.7l44 12C378 143.1 384 151 384 160c0 123.7-100.3 224-224 224c-9 0-16.9-6-19.3-14.7l-12-44c-2.6-9.7 2.3-19.9 11.6-23.7l48-20c8.2-3.4 17.6-1 23.2 5.8L231.7 312c35.2-16.6 63.7-45.1 80.3-80.3l-24.7-20.2c-6.8-5.6-9.2-15-5.8-23.2l20-48c3.9-9.3 14-14.2 23.7-11.6z" />
    </Icon>
);

export default CirclePhoneFlip;