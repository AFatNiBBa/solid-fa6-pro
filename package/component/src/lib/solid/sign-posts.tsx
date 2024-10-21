
import { Icon } from "../../index";

/**
 * A component that renders the `sign-posts` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sign-posts?s=solid sign-posts}
 * @preview ![sign-posts](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/sign-posts.svg)
 */
const SignPosts: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M96 0C78.3 0 64 14.3 64 32L48 32C21.5 32 0 53.5 0 80L0 368c0 26.5 21.5 48 48 48l480 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-16 0c0-17.7-14.3-32-32-32s-32 14.3-32 32L128 32c0-17.7-14.3-32-32-32zm32 448l-64 0 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32zm320 0l0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32-64 0z" />
    </Icon>
);

export default SignPosts;