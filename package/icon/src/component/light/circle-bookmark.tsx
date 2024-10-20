
import { Icon } from "../../index";

/**
 * A component that renders the `circle-bookmark` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-bookmark?s=light circle-bookmark}
 * @preview ![circle-bookmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-bookmark.svg)
 */
const CircleBookmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM192 176c0-8.8 7.2-16 16-16l96 0c8.8 0 16 7.2 16 16l0 158.7-54-43.2c-5.8-4.7-14.1-4.7-20 0l-54 43.2L192 176zm16-48c-26.5 0-48 21.5-48 48l0 192c0 6.2 3.5 11.8 9.1 14.4s12.1 1.9 16.9-1.9l70-56 70 56c4.8 3.8 11.4 4.6 16.9 1.9s9.1-8.3 9.1-14.4l0-192c0-26.5-21.5-48-48-48l-96 0z" />
    </Icon>
);

export default CircleBookmark;