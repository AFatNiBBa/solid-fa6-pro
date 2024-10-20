
import { Icon } from "../../index";

/**
 * A component that renders the `star-exclamation` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-exclamation?s=sharp-light star-exclamation}
 * @preview ![star-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/star-exclamation.svg)
 */
const StarExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M306.1 34.3L374.6 164 519 189l38.2 6.6-27 27.8L428 328.5l21 146.1 5.4 37.4-34.5-15.3L288.1 438.2 156.2 496.7 121.7 512l5.4-37.4 21-146.1L45.9 223.4l-27-27.8L57.1 189l144.5-25L270 34.3 288.1 0l18.1 34.3zm63 161.2l-15.5-2.7-7.3-13.9L288.1 68.6 229.9 178.9l-7.3 13.9L207 195.5 84.1 216.8 171 306.2l11 11.3-2.2 15.6L161.6 459.3 275.1 409l13-5.8 13 5.8 113.5 50.3L396.4 333.1l-2.2-15.6 11-11.3L492 216.8 369.1 195.5zM304 160l0 16 0 104 0 16-32 0 0-16 0-104 0-16 32 0zM264 328l48 0 0 48-48 0 0-48z" />
    </Icon>
);

export default StarExclamation;