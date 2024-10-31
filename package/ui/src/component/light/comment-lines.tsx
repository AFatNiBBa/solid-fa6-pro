
import { Icon } from "../../index";

/**
 * A component that renders the `comment-lines` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-lines?s=light comment-lines}
 * @preview ![comment-lines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/comment-lines.svg)
 */
const CommentLines: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 240c0-91.4 93.8-176 224-176s224 84.6 224 176s-93.8 176-224 176c-32 0-63-5.9-93.5-16.2c-9.9-3.3-20.7-1.8-29.2 4.2c-15.4 10.7-31.4 20-48.4 27.4L91.2 446l-6.4-14.7c-10.5 4.6-21.5 8.6-32.7 11.5c.5-.9 1.1-1.8 1.6-2.6C68 416.5 76.3 391 79.4 363.9c1-9.2-2.1-17.7-7.4-23.9c-24.5-29.4-40-62.9-40-100zM256 32C114.5 32 0 125.2 0 240c0 46.6 19.6 87.1 47.4 120.5c0 .1 .1 .1 .1 .2c-2.6 22.6-9.5 43.5-21.3 63.1c-6.5 10.8-13.5 20.8-21.7 29c-4.5 4.6-5.9 11.5-3.4 17.4s8.3 9.8 14.8 9.8c28.7 0 57.6-8.9 81.6-19.3c19.2-8.4 37.1-18.7 53.9-30.5c.2-.1 .5-.2 .7-.1C185.5 441.3 220 448 256 448c141.5 0 256-93.2 256-208S397.5 32 256 32zM144 176c-8.8 0-16 7.2-16 16s7.2 16 16 16l224 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-224 0zm0 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-128 0z" />
    </Icon>
);

export default CommentLines;