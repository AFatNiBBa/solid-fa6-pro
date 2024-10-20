
import { Icon } from "../../index";

/**
 * A component that renders the `can-food` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/can-food?s=regular can-food}
 * @preview ![can-food](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/can-food.svg)
 */
const CanFood: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M320 434.3c-3.4 3-10.2 7.5-21.7 12.2C273.5 456.6 235.9 464 192 464s-81.5-7.4-106.3-17.5c-11.5-4.7-18.3-9.2-21.7-12.2l0-144.8c14.2 6.1 31 11.3 49.7 15.1c7.6 36.3 39.8 63.5 78.3 63.5s70.7-27.2 78.3-63.5c18.7-3.8 35.5-8.9 49.7-15.1l0 144.8zm48 5.7l0-200 0-168c0-39.8-78.8-72-176-72S16 32.2 16 72l0 168 0 200c0 39.8 78.8 72 176 72s176-32.2 176-72zM304 72c0 13.3-50.1 24-112 24S80 85.3 80 72s50.1-24 112-24s112 10.7 112 24zM192 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default CanFood;