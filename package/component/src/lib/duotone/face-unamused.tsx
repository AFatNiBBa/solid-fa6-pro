
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-unamused` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-unamused?s=duotone face-unamused}
 * @preview ![face-unamused](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/face-unamused.svg)
 */
const FaceUnamused: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm96-48c0-8.8 7.2-16 16-16l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32l-32 0c-8.8 0-16-7.2-16-16zm76.1 165.3C188.2 355.4 216.3 336 256 336s67.8 19.4 83.9 37.3c5.9 6.6 5.4 16.7-1.2 22.6s-16.7 5.4-22.6-1.2c-11.7-13-31.6-26.7-60.1-26.7s-48.4 13.7-60.1 26.7c-5.9 6.6-16 7.1-22.6 1.2s-7.1-16-1.2-22.6zM288 208c0-8.8 7.2-16 16-16l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32l-32 0c-8.8 0-16-7.2-16-16z" />
        <path d="M96 208c0-8.8 7.2-16 16-16l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32l-32 0c-8.8 0-16-7.2-16-16zm192 0c0-8.8 7.2-16 16-16l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32l-32 0c-8.8 0-16-7.2-16-16z" />
    </Icon>
);

export default FaceUnamused;