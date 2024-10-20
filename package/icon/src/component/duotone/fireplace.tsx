
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fireplace` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fireplace?s=duotone fireplace}
 * @preview ![fireplace](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/fireplace.svg)
 */
const Fireplace: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 64C0 81.7 14.3 96 32 96l576 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32L32 0C14.3 0 0 14.3 0 32zM208 400.1c0 62 49.3 111.9 112 111.9c62.1 0 112-49.8 112-111.9c0-21-7.7-42.6-18.3-61.7C403 319.3 389 301.8 375.2 289c-3.9-3.6-8.9-5.5-13.9-5.5c-5.3 0-10.9 2-14.6 6.2l-8.6 9.7-13.3-14c-1.4-1.5-2.8-3.1-4.2-4.7c-6.3-7.2-13.1-14.9-22.9-15.1c-5.1-.1-10.2 1.6-14.2 5.3c-16.4 14.8-35 34.2-49.6 56.1c-14.5 21.8-25.8 47-25.8 73.1zm67.2 33.6c0-25.6 25.9-51.1 38.3-61.9c3.8-3.3 9.2-3.3 12.9 0c12.4 10.8 38.3 36.3 38.3 61.9c0 24.7-20.1 44.8-44.8 44.8s-44.8-20.1-44.8-44.8z" />
        <path d="M608 96L32 96l0 384c0 17.7 14.3 32 32 32l96 0 0-160c0-88.4 71.6-160 160-160s160 71.6 160 160l0 160 96 0c17.7 0 32-14.3 32-32l0-384z" />
    </Icon>
);

export default Fireplace;