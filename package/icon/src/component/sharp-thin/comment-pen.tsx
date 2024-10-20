
import { Icon } from "../../index";

/**
 * A component that renders the `comment-pen` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-pen?s=sharp-thin comment-pen}
 * @preview ![comment-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/comment-pen.svg)
 */
const CommentPen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M71.9 376.4l3.6-9.6-7.3-7.3C35.2 326.3 16 284.7 16 240C16 136.9 120.2 48 256 48s240 88.9 240 192s-104.2 192-240 192c-30 0-58.6-4.4-85-12.4l-4.6-1.4-4.6 1.4L42.3 455.4l29.6-79zM16 480l19.3-5.8 131.1-39.3c27.9 8.5 58.1 13.1 89.6 13.1c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 49.6 21.3 95.1 56.9 130.8L23.1 461.2 16 480zM300.5 144.3l-131 131-6.9 44.3L160 336.1l16.6-2.6 44.3-6.9L340.8 206.8l11.3-11.3-11.3-11.3L300.7 144l-.2 .2zm.2 22.4l28.8 28.8-21.4 21.4L279.3 188l21.4-21.4zM184.5 282.9L268 199.3l28.8 28.8-83.5 83.5L179.2 317l5.3-34.1z" />
    </Icon>
);

export default CommentPen;