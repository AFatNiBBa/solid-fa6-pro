
import { Icon } from "../../index";

/**
 * A component that renders the `can-food` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/can-food?s=sharp-solid can-food}
 * @preview ![can-food](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/can-food.svg)
 */
const CanFood: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M272 304.1c11.4-2.4 22.2-5.3 32-8.6L304 426c-2.8 1.6-6.6 3.6-11.8 5.7C269.8 440.9 234.4 448 192 448s-77.8-7.1-100.2-16.3c-5.2-2.1-9-4.1-11.8-5.7l0-130.4c9.8 3.3 20.6 6.2 32 8.6l0 15.9 0 48 48 0 64 0 48 0 0-48 0-15.9zm-48 6.7l0 9.2-16 0-32 0-16 0 0-9.2 0-54.8 64 0 0 54.8zM16 72l0 168 0 200c0 39.8 78.8 72 176 72s176-32.2 176-72l0-200 0-168c0-39.8-78.8-72-176-72S16 32.2 16 72zm288 0c0 13.3-50.1 24-112 24S80 85.3 80 72s50.1-24 112-24s112 10.7 112 24z" />
    </Icon>
);

export default CanFood;