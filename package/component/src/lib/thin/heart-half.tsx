
import { Icon } from "../../index";

/**
 * A component that renders the `heart-half` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-half?s=thin heart-half}
 * @preview ![heart-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/heart-half.svg)
 */
const HeartHalf: typeof Icon = x => (
    <Icon {...x}>
        <path d="M240 458.1l0-355.5-7.3-7.3c-29-29-70.2-42.2-110.6-35.5C60.9 70.1 16 123 16 185.1l0 5.8c0 37.1 15.4 72.5 42.5 97.8L240 458.1zm-3.3 18.8L47.6 300.4C17.2 272.1 0 232.4 0 190.9l0-5.8c0-69.9 50.5-129.5 119.4-141C165 36.5 211.4 51.4 244 84l12 12 0 372.5c0 6.3-5.1 11.5-11.5 11.5c-2.9 0-5.7-1.1-7.8-3.1z" />
    </Icon>
);

export default HeartHalf;