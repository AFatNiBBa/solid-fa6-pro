
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comment-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-slash?s=duotone comment-slash}
 * @preview ![comment-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/comment-slash.svg)
 */
const CommentSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 240c0-27.8 6.7-54.4 18.9-78.7L424.1 430.1C392.3 441.6 357 448 320 448c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C137.6 471.1 108.7 480 80 480c-6.5 0-12.3-3.9-14.8-9.9c-.8-2-1.2-4.1-1.2-6.1c0-4.2 1.6-8.2 4.7-11.3l.3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C81.7 326.8 64 285.1 64 240zM144.9 88.3C190.7 53.4 252.3 32 320 32c141.4 0 256 93.1 256 208c0 52.3-23.8 100.2-63.1 136.7c-122.7-96.1-245.3-192.3-368-288.5z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default CommentSlash;