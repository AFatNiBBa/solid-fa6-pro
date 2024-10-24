
import { Icon, generic } from "../../index";

/**
 * A component that renders the `signs-post` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signs-post?s=duotone signs-post}
 * @preview ![signs-post](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/signs-post.svg)
 */
const SignsPost: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32-64 0 0-32zm0 160l64 0 0 32-64 0 0-32zm0 160l64 0 0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128z" />
        <path d="M64 64l377.4 0c4.2 0 8.3 1.7 11.3 4.7l48 48c6.2 6.2 6.2 16.4 0 22.6l-48 48c-3 3-7.1 4.7-11.3 4.7L64 192c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32zM448 224c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L70.6 352c-4.2 0-8.3-1.7-11.3-4.7l-48-48c-6.2-6.2-6.2-16.4 0-22.6l48-48c3-3 7.1-4.7 11.3-4.7L448 224z" />
    </Icon>
);

export default SignsPost;