
import { Icon } from "../../index";

/**
 * A component that renders the `blog` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blog?s=light blog}
 * @preview ![blog](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/blog.svg)
 */
const Blog: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 32c-8.8 0-16 7.2-16 16s7.2 16 16 16c132.5 0 240 107.5 240 240c0 8.8 7.2 16 16 16s16-7.2 16-16C480 153.8 358.2 32 208 32zm0 96c-8.8 0-16 7.2-16 16s7.2 16 16 16c79.5 0 144 64.5 144 144c0 8.8 7.2 16 16 16s16-7.2 16-16c0-97.2-78.8-176-176-176zM32 120c0-8.8-7.2-16-16-16s-16 7.2-16 16L0 368c0 79.5 64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144l-8 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l8 0c61.9 0 112 50.1 112 112s-50.1 112-112 112S32 429.9 32 368l0-248z" />
    </Icon>
);

export default Blog;