
import { Icon } from "../../index";

/**
 * A component that renders the `comment-code` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-code?s=sharp-regular comment-code}
 * @preview ![comment-code](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/comment-code.svg)
 */
const CommentCode: typeof Icon = x => (
    <Icon {...x}>
        <path d="M101.9 387.7l10.8-28.9L90.9 336.9C63 308.9 48 275.1 48 240c0-79.5 83.3-160 208-160s208 80.5 208 160s-83.3 160-208 160c-26.8 0-52.3-3.9-75.7-11l-13.9-4.2-13.9 4.2L94.9 406.2l7-18.5zM16 480l57.8-17.3 92.6-27.8c27.9 8.5 58.1 13.1 89.6 13.1c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 49.6 21.3 95.1 56.9 130.8L37.2 423.5 16 480zM217 193l17-17L200 142.1l-17 17-64 64-17 17 17 17 64 64 17 17L233.9 304l-17-17-47-47 47-47zM329 159l-17-17L278.1 176l17 17 47 47-47 47-17 17L312 337.9l17-17 64-64 17-17-17-17-64-64z" />
    </Icon>
);

export default CommentCode;