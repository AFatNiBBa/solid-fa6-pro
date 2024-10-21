
import { Icon } from "../../index";

/**
 * A component that renders the `grill` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grill?s=sharp-thin grill}
 * @preview ![grill](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/grill.svg)
 */
const Grill: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 48l0 48c0 114.9-93.1 208-208 208S16 210.9 16 96l0-48 416 0zM16 32L0 32 0 48 0 96c0 93.9 57.8 174.3 139.8 207.6l-23.5 51.7c-6.4-2.1-13.2-3.3-20.3-3.3c-35.3 0-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64c0-5.5-.7-10.9-2-16l176.5 0 32.4 71.3 3.3 7.3 14.6-6.6-3.3-7.3L308.2 303.6C390.2 270.3 448 189.9 448 96l0-48 0-16-16 0L16 32zM327.2 384l-175.8 0c-5.1-8.8-12.2-16.3-20.7-21.8l24.1-53.1c21.8 7.1 45 10.9 69.2 10.9s47.4-3.8 69.2-10.9l34 74.9zM96 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default Grill;