
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rectangle-xmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-xmark?s=sharp-duotone-solid rectangle-xmark}
 * @preview ![rectangle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/rectangle-xmark.svg)
 */
const RectangleXmark: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 480l512 0 0-448L0 32zM158.1 192c11.3-11.3 22.6-22.6 33.9-33.9c5.7 5.7 11.3 11.3 17 17c15.7 15.7 31.3 31.3 47 47c15.7-15.7 31.3-31.3 47-47c5.7-5.7 11.3-11.3 17-17c11.3 11.3 22.6 22.6 33.9 33.9c-5.7 5.7-11.3 11.3-17 17c-15.7 15.7-31.3 31.3-47 47c15.7 15.7 31.4 31.4 47 47c5.7 5.7 11.3 11.3 17 17L320 353.9l-17-17-47-47c-15.7 15.7-31.3 31.3-47 47c-5.7 5.7-11.3 11.3-17 17c-11.3-11.3-22.6-22.6-33.9-33.9c5.7-5.7 11.3-11.3 17-17c15.7-15.7 31.4-31.4 47-47c-15.7-15.7-31.3-31.3-47-47c-5.7-5.7-11.3-11.3-17-17z" />
        <path d="M337 209l17-17L320 158.1l-17 17-47 47-47-47-17-17L158.1 192l17 17 47 47-47 47-17 17L192 353.9l17-17 47-47 47 47 17 17L353.9 320l-17-17-47-47 47-47z" />
    </Icon>
);

export default RectangleXmark;