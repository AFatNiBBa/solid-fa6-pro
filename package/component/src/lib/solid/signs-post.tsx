
import { Icon } from "../../index";

/**
 * A component that renders the `signs-post` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signs-post?s=solid signs-post}
 * @preview ![signs-post](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/signs-post.svg)
 */
const SignsPost: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 32L64 32C46.3 32 32 46.3 32 64l0 64c0 17.7 14.3 32 32 32l377.4 0c4.2 0 8.3-1.7 11.3-4.7l48-48c6.2-6.2 6.2-16.4 0-22.6l-48-48c-3-3-7.1-4.7-11.3-4.7L288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32zM480 256c0-17.7-14.3-32-32-32l-160 0 0-32-64 0 0 32L70.6 224c-4.2 0-8.3 1.7-11.3 4.7l-48 48c-6.2 6.2-6.2 16.4 0 22.6l48 48c3 3 7.1 4.7 11.3 4.7L448 352c17.7 0 32-14.3 32-32l0-64zM288 480l0-96-64 0 0 96c0 17.7 14.3 32 32 32s32-14.3 32-32z" />
    </Icon>
);

export default SignsPost;