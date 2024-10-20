
import { Icon } from "../../index";

/**
 * A component that renders the `comment-image` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-image?s=light comment-image}
 * @preview ![comment-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/comment-image.svg)
 */
const CommentImage: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 240c0-91.4 93.8-176 224-176s224 84.6 224 176s-93.8 176-224 176c-32 0-63-5.9-93.5-16.2c-9.9-3.3-20.7-1.8-29.2 4.2c-15.4 10.7-31.4 20-48.4 27.4L91.2 446l-6.4-14.7c-10.5 4.6-21.5 8.6-32.7 11.5c.5-.9 1.1-1.8 1.6-2.6C68 416.5 76.3 391 79.4 363.9c1-9.2-2.1-17.7-7.4-23.9c-24.5-29.4-40-62.9-40-100zM256 32C114.5 32 0 125.2 0 240c0 46.6 19.6 87.1 47.4 120.5c0 .1 .1 .1 .1 .2c-2.6 22.6-9.5 43.5-21.3 63.1c-6.5 10.8-13.5 20.8-21.7 29c-4.5 4.6-5.9 11.5-3.4 17.4s8.3 9.8 14.8 9.8c28.7 0 57.6-8.9 81.6-19.3c19.2-8.4 37.1-18.7 53.9-30.5c.2-.1 .5-.2 .7-.1C185.5 441.3 220 448 256 448c141.5 0 256-93.2 256-208S397.5 32 256 32zM184 160a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm104.2 16c.1 0 .2 .1 .3 .1L379.4 288l-246.1 0L175 240.3c.1-.2 .4-.3 .6-.3c.2 0 .5 .1 .6 .3l19 25.3c3 4 7.8 6.4 12.8 6.4s9.8-2.4 12.8-6.4l67.1-89.4c.1-.1 .2-.2 .3-.2zm0-32c-10.2 0-19.8 4.8-25.9 13L208 229.3l-6.2-8.2c-6.2-8.3-15.9-13.1-26.2-13.1c-9.5 0-18.4 4.1-24.7 11.2l-48.1 55c-4.4 5-6.8 11.5-6.8 18.2c0 15.3 12.4 27.6 27.6 27.6l264.6 0c15.4 0 27.8-12.4 27.8-27.8c0-6.4-2.2-12.6-6.2-17.5L313.3 156c-6.2-7.6-15.4-12-25.1-12z" />
    </Icon>
);

export default CommentImage;