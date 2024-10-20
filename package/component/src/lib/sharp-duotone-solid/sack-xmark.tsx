
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sack-xmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sack-xmark?s=sharp-duotone-solid sack-xmark}
 * @preview ![sack-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sack-xmark.svg)
 */
const SackXmark: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 416l0 96 512 0 0-96c0-165.1-122.3-243.3-179-279.6c-4.8-3.1-9.2-5.9-13-8.4l-128 0c-3.8 2.5-8.1 5.3-13 8.4C122.3 172.7 0 250.9 0 416zM128 0c21.3 32 42.7 64 64 96l128 0L384 0 128 0zm30.1 256L192 222.1c5.7 5.7 11.3 11.3 17 17l47 47 47-47c5.7-5.7 11.3-11.3 17-17L353.9 256l-17 17-47 47 47 47 17 17L320 417.9c-5.7-5.7-11.3-11.3-17-17c-15.7-15.7-31.4-31.4-47-47c-15.7 15.7-31.4 31.4-47 47c-5.7 5.7-11.3 11.3-17 17c-11.3-11.3-22.6-22.6-33.9-33.9l17-17c15.7-15.7 31.4-31.4 47-47c-15.7-15.7-31.4-31.4-47-47c-5.7-5.7-11.3-11.3-17-17z" />
        <path d="M192 96l128 0 16 0 0 32-16 0-128 0-16 0 0-32 16 0zM158.1 384l17-17 47-47-47-47-17-17L192 222.1l17 17 47 47 47-47 17-17L353.9 256l-17 17-47 47 47 47 17 17L320 417.9l-17-17-47-47-47 47-17 17L158.1 384z" />
    </Icon>
);

export default SackXmark;