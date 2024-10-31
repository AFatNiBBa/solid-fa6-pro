
import { Icon } from "../../index";

/**
 * A component that renders the `face-unamused` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-unamused?s=sharp-regular face-unamused}
 * @preview ![face-unamused](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/face-unamused.svg)
 */
const FaceUnamused: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM294.5 392.4c-7.4-7.9-20-16.4-38.5-16.4s-31.1 8.5-38.5 16.4l-16.4 17.5-35.1-32.7 16.4-17.5C196.7 344.3 221.4 328 256 328s59.3 16.3 73.5 31.6l16.4 17.5-35.1 32.7-16.4-17.5zM208 224c0 17.7-14.3 32-32 32s-32-14.3-32-32l-32 0-16 0 0-32 16 0 64 0c17.7 0 32 14.3 32 32zm192 0c0 17.7-14.3 32-32 32s-32-14.3-32-32l-32 0-16 0 0-32 16 0 64 0c17.7 0 32 14.3 32 32z" />
    </Icon>
);

export default FaceUnamused;