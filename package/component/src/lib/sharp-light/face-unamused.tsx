
import { Icon } from "../../index";

/**
 * A component that renders the `face-unamused` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-unamused?s=sharp-light face-unamused}
 * @preview ![face-unamused](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/face-unamused.svg)
 */
const FaceUnamused: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM316.1 394.7c-11.7-13-31.6-26.7-60.1-26.7s-48.4 13.7-60.1 26.7l-10.7 11.9-23.8-21.4 10.7-11.9C188.2 355.4 216.3 336 256 336s67.8 19.4 83.9 37.3l10.7 11.9-23.8 21.4-10.7-11.9zM112 192l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32l-32 0-16 0 0-32 16 0zm176 0l16 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32l-32 0-16 0 0-32z" />
    </Icon>
);

export default FaceUnamused;