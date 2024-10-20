
import { Icon } from "../../index";

/**
 * A component that renders the `comment-text` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-text?s=regular comment-text}
 * @preview ![comment-text](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/comment-text.svg)
 */
const CommentText: typeof Icon = x => (
    <Icon {...x}>
        <path d="M168.2 384.9c-15-5.4-31.7-3.1-44.6 6.4c-8.2 6-22.3 14.8-39.4 22.7c5.6-14.7 9.9-31.3 11.3-49.4c1-12.9-3.3-25.7-11.8-35.5C60.4 302.8 48 272 48 240c0-79.5 83.3-160 208-160s208 80.5 208 160s-83.3 160-208 160c-31.6 0-61.3-5.5-87.8-15.1zM26.3 423.8c-1.6 2.7-3.3 5.4-5.1 8.1l-.3 .5c-1.6 2.3-3.2 4.6-4.8 6.9c-3.5 4.7-7.3 9.3-11.3 13.5c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c5.1 0 10.2-.3 15.3-.8l.7-.1c4.4-.5 8.8-1.1 13.2-1.9c.8-.1 1.6-.3 2.4-.5c17.8-3.5 34.9-9.5 50.1-16.1c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9zM184 160c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0 0 104c0 13.3 10.7 24 24 24s24-10.7 24-24l0-104 48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-72 0-72 0z" />
    </Icon>
);

export default CommentText;