
import { Icon } from "../../index";

/**
 * A component that renders the `comment` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment?s=sharp-regular comment}
 * @preview ![comment](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/comment.svg)
 */
const Comment: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112.7 358.8l-10.8 28.9-7 18.5 57.6-17.3 13.9-4.2 13.9 4.2c23.3 7.1 48.8 11 75.7 11c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 35.1 15 68.9 42.9 96.9l21.8 21.9zm-39 103.9L16 480l21.2-56.5 19.8-52.7C21.3 335.1 0 289.6 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-31.5 0-61.7-4.6-89.6-13.1L73.8 462.7z" />
    </Icon>
);

export default Comment;