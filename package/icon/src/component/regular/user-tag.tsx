
import { Icon } from "../../index";

/**
 * A component that renders the `user-tag` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-tag?s=regular user-tag}
 * @preview ![user-tag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/user-tag.svg)
 */
const UserTag: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 208a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zM398.7 464c-.5-3.4-1.1-6.7-1.8-10l45.6 45.6c-5.4 7.5-14.2 12.5-24.2 12.5L29.7 512C13.3 512 0 498.7 0 482.3C0 383.8 79.8 304 178.3 304l45.7 0 45.7 0c17.5 0 34.3 2.5 50.3 7.2l0 33c0 6.4 .8 12.7 2.3 18.8c-16.1-7.1-33.9-11-52.6-11l-91.4 0c-65.7 0-120.1 48.7-129 112l349.5 0zM384 224l82.7 0c17 0 33.3 6.7 45.3 18.7L619.3 350.1c18.7 18.7 18.7 49.1 0 67.9l-73.4 73.4c-18.7 18.7-49.1 18.7-67.9 0L370.7 384c-12-12-18.7-28.3-18.7-45.3l0-82.7c0-17.7 14.3-32 32-32zm72 80a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default UserTag;