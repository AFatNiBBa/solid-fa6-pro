
import { Icon } from "../../index";

/**
 * A component that renders the `comments` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comments?s=sharp-regular comments}
 * @preview ![comments](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/comments.svg)
 */
const Comments: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M85.7 298.9l11-27.4L77.2 249.4C58.2 227.8 48 202.5 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.5 0-26.6-1.3-39-3.9l-10.2-2.1-10.1 2.3-70 16.2 7.1-17.6zM0 384l57-13.1 102.6-23.7c15.6 3.1 31.8 4.8 48.5 4.8c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 39.4 15.3 75.8 41.2 105.1L21.7 329.7 0 384zm432 96c16.7 0 32.9-1.7 48.5-4.8L583 498.9 640 512l-21.7-54.3-19.4-48.6C624.7 379.8 640 343.4 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 26.5-10.2 51.8-29.2 73.4l-19.5 22.2 11 27.4 7.1 17.6-70.1-16.2-10.1-2.3L471 428.1c-12.4 2.5-25.5 3.9-39 3.9c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z" />
    </Icon>
);

export default Comments;