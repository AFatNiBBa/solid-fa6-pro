
import { Icon } from "../../index";

/**
 * A component that renders the `face-unamused` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-unamused?s=regular face-unamused}
 * @preview ![face-unamused](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/face-unamused.svg)
 */
const FaceUnamused: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM294.5 392.4c-7.4-7.9-20-16.4-38.5-16.4s-31.1 8.5-38.5 16.4c-9 9.7-24.2 10.2-33.9 1.2s-10.2-24.2-1.2-33.9C196.7 344.3 221.4 328 256 328s59.3 16.3 73.5 31.6c9 9.7 8.5 24.9-1.2 33.9s-24.9 8.5-33.9-1.2zM112 192l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32l-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm176 16c0-8.8 7.2-16 16-16l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32l-32 0c-8.8 0-16-7.2-16-16z" />
    </Icon>
);

export default FaceUnamused;