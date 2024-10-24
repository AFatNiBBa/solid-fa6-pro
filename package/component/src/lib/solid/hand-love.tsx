
import { Icon } from "../../index";

/**
 * A component that renders the `hand-love` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-love?s=solid hand-love}
 * @preview ![hand-love](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/hand-love.svg)
 */
const HandLove: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 0c17.7 0 32 14.3 32 32l0 159.9 0 .1 0 96c0 35.3 28.7 64 64 64c19.1 0 36.3-8.4 48-21.7c11.7 13.3 28.9 21.7 48 21.7c35.3 0 64-28.7 64-64l0-63.9c0 0 0 0 0-.1l0-128c0-17.7 14.3-32 32-32s32 14.3 32 32l0 240c0 97.2-78.8 176-176 176l-19.2 0c-59.6 0-116.9-22.9-160-64L12.4 341c-16-15.2-16.6-40.6-1.4-56.6s40.6-16.6 56.6-1.4l60.5 57.6c0-1.5-.1-3.1-.1-4.6l0-304c0-17.7 14.3-32 32-32zm64 192c0-17.7 14.3-32 32-32s32 14.3 32 32l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96zm128 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default HandLove;