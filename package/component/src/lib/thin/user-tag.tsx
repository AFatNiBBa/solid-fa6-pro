
import { Icon } from "../../index";

/**
 * A component that renders the `user-tag` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-tag?s=thin user-tag}
 * @preview ![user-tag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/user-tag.svg)
 */
const UserTag: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 240a112 112 0 1 0 0-224 112 112 0 1 0 0 224zm-45.7 80C88.7 320 16 392.7 16 482.3c0 7.6 6.1 13.7 13.7 13.7l388.6 0c5.6 0 10.4-3.3 12.5-8.1l11.7 11.7c-5.4 7.5-14.2 12.5-24.2 12.5L29.7 512C13.3 512 0 498.7 0 482.3C0 383.8 79.8 304 178.3 304l91.4 0c17.5 0 34.3 2.5 50.3 7.2l0 16.8c-15.8-5.2-32.7-7.9-50.3-7.9l-91.4 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM384 240c-8.8 0-16 7.2-16 16l0 82.7c0 12.7 5.1 24.9 14.1 33.9L489.4 480c12.5 12.5 32.8 12.5 45.3 0L608 406.6c12.5-12.5 12.5-32.8 0-45.3L500.7 254.1c-9-9-21.2-14.1-33.9-14.1L384 240zm-32 16c0-17.7 14.3-32 32-32l82.7 0c17 0 33.3 6.7 45.3 18.7L619.3 350.1c18.7 18.7 18.7 49.1 0 67.9l-73.4 73.4c-18.7 18.7-49.1 18.7-67.9 0L370.7 384c-12-12-18.7-28.3-18.7-45.3l0-82.7zm56 40a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default UserTag;