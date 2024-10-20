
import { Icon } from "../../index";

/**
 * A component that renders the `butter` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/butter?s=light butter}
 * @preview ![butter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/butter.svg)
 */
const Butter: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M480 96l0 192-32 0 0-192L128 96c-17.7 0-32 14.3-32 32l0 160-32 0 0-160c0-35.3 28.7-64 64-64l320 0 16 0 16 0 32 0c35.3 0 64 28.7 64 64l0 160-32 0 0-160c0-17.7-14.3-32-32-32l-32 0zM0 336c0-8.8 7.2-16 16-16l16 0 32 0 512 0 32 0 16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0 0 48c0 26.5-21.5 48-48 48L80 448c-26.5 0-48-21.5-48-48l0-48-16 0c-8.8 0-16-7.2-16-16zm64 16l0 48c0 8.8 7.2 16 16 16l480 0c8.8 0 16-7.2 16-16l0-48L64 352z" />
    </Icon>
);

export default Butter;