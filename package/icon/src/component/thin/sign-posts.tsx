
import { Icon } from "../../index";

/**
 * A component that renders the `sign-posts` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sign-posts?s=thin sign-posts}
 * @preview ![sign-posts](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/sign-posts.svg)
 */
const SignPosts: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M80 32L80 8c0-4.4 3.6-8 8-8s8 3.6 8 8l0 24 384 0 0-24c0-4.4 3.6-8 8-8s8 3.6 8 8l0 24 32 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-32 0 0 88c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-88L96 416l0 88c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-88-32 0c-26.5 0-48-21.5-48-48L0 80C0 53.5 21.5 32 48 32l32 0zM528 48L48 48C30.3 48 16 62.3 16 80l0 288c0 17.7 14.3 32 32 32l480 0c17.7 0 32-14.3 32-32l0-288c0-17.7-14.3-32-32-32z" />
    </Icon>
);

export default SignPosts;