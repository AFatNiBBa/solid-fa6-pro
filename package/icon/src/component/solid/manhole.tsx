
import { Icon } from "../../index";

/**
 * A component that renders the `manhole` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/manhole?s=solid manhole}
 * @preview ![manhole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/manhole.svg)
 */
const Manhole: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM281.4 115.4c5.8-7.5 14.5-14.7 23.6-11.8c64.4 20.7 111 81.1 111 152.4s-46.6 131.7-111 152.4c-9 2.9-17.8-4.3-23.6-11.8c-5.8-7.6-15.1-12.6-25.4-12.6s-19.6 4.9-25.4 12.6c-5.8 7.5-14.5 14.7-23.6 11.8C142.6 387.7 96 327.3 96 256s46.6-131.7 111-152.4c9-2.9 17.8 4.3 23.6 11.8c5.8 7.6 15.1 12.6 25.4 12.6s19.6-4.9 25.4-12.6zM192 176a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm0 64a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm0 64a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm80-112a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-32 64a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm32 64a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48-144a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm0 64a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm0 64a16 16 0 1 0 0 32 16 16 0 1 0 0-32z" />
    </Icon>
);

export default Manhole;