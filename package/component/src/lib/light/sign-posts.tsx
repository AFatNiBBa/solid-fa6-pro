
import { Icon } from "../../index";

/**
 * A component that renders the `sign-posts` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sign-posts?s=light sign-posts}
 * @preview ![sign-posts](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/sign-posts.svg)
 */
const SignPosts: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 64c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l480 0c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16l-16 0-32 0L96 64 64 64 48 64zM512 32l16 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-16 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80L96 416l0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-16 0c-26.5 0-48-21.5-48-48L0 80C0 53.5 21.5 32 48 32l16 0 0-16C64 7.2 71.2 0 80 0s16 7.2 16 16l0 16 384 0 0-16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 16z" />
    </Icon>
);

export default SignPosts;