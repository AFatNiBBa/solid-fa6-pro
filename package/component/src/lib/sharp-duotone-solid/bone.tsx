
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bone` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bone?s=sharp-duotone-solid bone}
 * @preview ![bone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bone.svg)
 */
const Bone: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M149.3 136C127.2 97.7 78.3 84.6 40 106.7S-11.4 177.7 10.7 216c8.9 15.4 22.1 26.7 37.3 33.3l0 13.3c-15.1 6.6-28.4 17.9-37.3 33.3c-22.1 38.3-9 87.2 29.3 109.3s87.2 9 109.3-29.3l23.1-40 231.2 0 23.1 40c22.1 38.3 71 51.4 109.3 29.3s51.4-71 29.3-109.3c-8.9-15.4-22.1-26.7-37.3-33.3l0-13.3c15.1-6.6 28.4-17.9 37.3-33.3c22.1-38.3 9-87.2-29.3-109.3s-87.2-9-109.3 29.3l-23.1 40-231.2 0-23.1-40z" />
    </Icon>
);

export default Bone;