
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comment-smile` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-smile?s=sharp-duotone-solid comment-smile}
 * @preview ![comment-smile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/comment-smile.svg)
 */
const CommentSmile: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 240c0 49.6 21.3 95.1 56.9 130.8L16 480l150.4-45.1c27.9 8.5 58.1 13.1 89.6 13.1c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240zm132.7 46.1l35.8-32c5.3 6 10.7 11.9 16 17.9c17.6 19.7 43.1 32 71.6 32s53.9-12.3 71.6-32c5.3-6 10.7-11.9 16-17.9l35.8 32c-5.3 6-10.7 11.9-16 17.9C337 333.4 298.6 352 256 352s-81-18.6-107.3-48c-5.3-6-10.7-11.9-16-17.9zM160 176c0-17.7 14.3-32 32-32c8.8 0 16.8 3.6 22.6 9.4c2.9 2.9 5.2 6.3 6.9 10.2c.8 1.9 1.4 3.9 1.9 6c.2 1 .4 2.1 .5 3.2c.1 .6 .1 1.1 .1 1.6s0 1 0 1.2l0 .4 0 .4c0 .3 0 .7 0 1.3c0 .5-.1 1-.1 1.6c-.1 1.1-.3 2.1-.5 3.2c-.4 2.1-1.1 4.1-1.9 6c-1.6 3.8-4 7.3-6.9 10.2c-5.8 5.8-13.8 9.4-22.6 9.4c-17.7 0-32-14.3-32-32zm192 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M224 176a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm128 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM184.4 272l-16-17.9-35.8 32 16 17.9c26.3 29.4 64.7 48 107.3 48s81-18.6 107.3-48l16-17.9-35.8-32-16 17.9c-17.6 19.7-43.1 32-71.6 32s-53.9-12.3-71.6-32z" />
    </Icon>
);

export default CommentSmile;