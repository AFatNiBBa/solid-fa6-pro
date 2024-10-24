
import { Icon } from "../../index";

/**
 * A component that renders the `can-food` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/can-food?s=solid can-food}
 * @preview ![can-food](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/can-food.svg)
 */
const CanFood: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M270.3 304.5c12.1-2.5 23.4-5.5 33.7-9L304 426c-2.8 1.6-6.6 3.6-11.8 5.7C269.8 440.9 234.4 448 192 448s-77.8-7.1-100.2-16.3c-5.2-2.1-9-4.1-11.8-5.7l0-130.4c10.3 3.5 21.6 6.5 33.7 9c7.6 36.3 39.8 63.5 78.3 63.5s70.7-27.2 78.3-63.5zm-100.1-40a32 32 0 1 1 43.5 46.9 32 32 0 1 1 -43.5-46.9zM16 72l0 168 0 200c0 39.8 78.8 72 176 72s176-32.2 176-72l0-200 0-168c0-39.8-78.8-72-176-72S16 32.2 16 72zm288 0c0 13.3-50.1 24-112 24S80 85.3 80 72s50.1-24 112-24s112 10.7 112 24z" />
    </Icon>
);

export default CanFood;