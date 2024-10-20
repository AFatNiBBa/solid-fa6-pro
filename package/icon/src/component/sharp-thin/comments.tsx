
import { Icon } from "../../index";

/**
 * A component that renders the `comments` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comments?s=sharp-thin comments}
 * @preview ![comments](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/comments.svg)
 */
const Comments: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M51.9 284.1l4.7-9.3-6.7-8C28.3 240.7 16 209.4 16 176C16 90 99.4 16 208 16s192 74 192 160s-83.4 160-192 160c-33.9 0-65.7-7.3-93.2-20.1l-4.7-2.2-5.1 1-76 15.2 22.9-45.8zM0 352l19.9-4 88.2-17.6C137.7 344.2 171.8 352 208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 37.5 13.9 72.3 37.6 100.9l-28.5 57L0 352zM432 512c36.2 0 70.3-7.8 99.9-21.6L620.1 508l19.9 4-9.1-18.1-28.5-57C626.1 408.3 640 373.5 640 336c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5l0 .5c100.7 6.8 176 77.8 176 159.5c0 33.4-12.3 64.7-33.9 90.7l-6.7 8 4.7 9.3 22.9 45.8-76-15.2-5.1-1-4.7 2.2C497.7 488.7 465.9 496 432 496c-89 0-161-49.7-184.2-114.9c-5.4 .8-10.8 1.4-16.3 1.9C255.8 457.4 336.4 512 432 512z" />
    </Icon>
);

export default Comments;