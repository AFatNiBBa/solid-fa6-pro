
import { Icon } from "../../index";

/**
 * A component that renders the `comment-slash` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-slash?s=sharp-light comment-slash}
 * @preview ![comment-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/comment-slash.svg)
 */
const CommentSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M40.4 18L27.8 8.1 8.1 33.4l12.6 9.8L599.8 494.3l12.6 9.8 19.7-25.2L619.5 469 40.4 18zM403.5 403.5C378.1 411.5 350 416 320 416c-28.4 0-55.5-4.2-80.3-11.7l-9.2-2.8-9.3 2.8-88.5 26.6L150.9 382l7.2-19.3-14.5-14.6C113.1 317.6 96 279.9 96 240c0-22.9 5.9-45.3 16.7-66.1L87 153.6C72.2 179.9 64 209.2 64 240c0 49.6 21.3 95.1 56.9 130.8L94.1 442.4 80 480l38.5-11.6 111.9-33.6c27.9 8.5 58.1 13.1 89.6 13.1c40.5 0 78.9-7.7 113-21.3l-29.4-23.2zM320 32c-51.1 0-98.6 12.1-138.6 33.1L209.2 87C241.2 72.5 278.8 64 320 64c130.2 0 224 84.7 224 176c0 31-10.8 61.2-30.1 87.5l25.3 20C562.6 316.1 576 279.3 576 240C576 125.1 461.4 32 320 32z" />
    </Icon>
);

export default CommentSlash;