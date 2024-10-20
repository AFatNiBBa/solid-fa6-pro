
import { Icon } from "../../index";

/**
 * A component that renders the `comment-slash` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-slash?s=light comment-slash}
 * @preview ![comment-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/comment-slash.svg)
 */
const CommentSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M25.9 3.4C19-2 8.9-.8 3.4 6.1S-.8 23.1 6.1 28.6l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5L25.9 3.4zm377.6 400C378.1 411.5 350 416 320 416c-32 0-63-5.9-93.5-16.2c-9.9-3.3-20.7-1.8-29.2 4.2c-15.4 10.7-31.4 20-48.4 27.4l6.4 14.7-6.4-14.7c-10.5 4.6-21.5 8.6-32.7 11.5c.5-.9 1.1-1.8 1.6-2.6c14.3-23.8 22.6-49.3 25.7-76.3c1-9.2-2.1-17.7-7.4-23.9c-24.5-29.4-40-62.9-40-100c0-22.9 5.9-45.3 16.7-66.1L87 153.6C72.2 179.9 64 209.2 64 240c0 46.6 19.6 87.1 47.4 120.5l.1 .1c0 0 0 0 0 .1c-2.6 22.6-9.5 43.5-21.3 63.1c-6.5 10.8-13.5 20.8-21.7 29c-4.5 4.6-5.9 11.5-3.4 17.4s8.3 9.8 14.8 9.8c28.7 0 57.6-8.9 81.6-19.3c19.2-8.4 37.1-18.7 53.9-30.5c.2-.1 .5-.2 .7-.1C249.5 441.3 284 448 320 448c40.6 0 78.9-7.7 113-21.3l-29.4-23.2zM320 32c-51.1 0-98.6 12.1-138.6 33.1L209.2 87C241.3 72.5 278.8 64 320 64c130.2 0 224 84.6 224 176c0 31-10.8 61.2-30.1 87.5l25.3 20C562.6 316.1 576 279.3 576 240C576 125.2 461.5 32 320 32z" />
    </Icon>
);

export default CommentSlash;