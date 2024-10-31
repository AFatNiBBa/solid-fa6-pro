
import { Icon } from "../../index";

/**
 * A component that renders the `child-reaching` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/child-reaching?s=sharp-light child-reaching}
 * @preview ![child-reaching](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/child-reaching.svg)
 */
const ChildReaching: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-96 0a64 64 0 1 1 128 0A64 64 0 1 1 128 64zM112 192l-9.5 0-9.2 0-4.6-8L42.2 104l-8-13.8L61.8 74.1l8 13.8 41.9 72 159.2 0 43.3-72.2L322.5 74 350 90.5l-8.2 13.7-48 80-4.7 7.8-9.1 0-8 0 0 304 0 16-32 0 0-16 0-112-96 0 0 112 0 16-32 0 0-16 0-304zm32 0l0 160 96 0 0-160-96 0z" />
    </Icon>
);

export default ChildReaching;