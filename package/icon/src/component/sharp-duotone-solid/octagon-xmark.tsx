
import { Icon, generic } from "../../index";

/**
 * A component that renders the `octagon-xmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon-xmark?s=sharp-duotone-solid octagon-xmark}
 * @preview ![octagon-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/octagon-xmark.svg)
 */
const OctagonXmark: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 160L160 0 352 0 512 160l0 192L352 512l-192 0L0 352 0 160zm158.1 32c5.7 5.7 11.3 11.3 17 17c15.7 15.7 31.4 31.4 47 47c-15.7 15.7-31.4 31.4-47 47c-5.7 5.7-11.3 11.3-17 17c11.3 11.3 22.6 22.6 33.9 33.9c5.7-5.7 11.3-11.3 17-17c15.7-15.7 31.4-31.4 47-47l47 47 17 17L353.9 320c-5.7-5.7-11.3-11.3-17-17c-15.7-15.7-31.4-31.4-47-47c15.7-15.7 31.4-31.4 47-47c5.7-5.7 11.3-11.3 17-17c-11.3-11.3-22.6-22.6-33.9-33.9c-5.7 5.7-11.3 11.3-17 17c-15.7 15.7-31.4 31.4-47 47c-15.7-15.7-31.4-31.4-47-47c-5.7-5.7-11.3-11.3-17-17c-11.3 11.3-22.6 22.6-33.9 33.9z" />
        <path d="M337 209l17-17L320 158.1l-17 17-47 47-47-47-17-17L158.1 192l17 17 47 47-47 47-17 17L192 353.9l17-17 47-47 47 47 17 17L353.9 320l-17-17-47-47 47-47z" />
    </Icon>
);

export default OctagonXmark;