
import { Icon } from "../../index";

/**
 * A component that renders the `user-tag` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-tag?s=light user-tag}
 * @preview ![user-tag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/user-tag.svg)
 */
const UserTag: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 224a96 96 0 1 0 0-192 96 96 0 1 0 0 192zM416 480c0-2.4-.1-4.8-.3-7.2l26.8 26.8c-5.4 7.5-14.2 12.5-24.2 12.5L29.7 512C13.3 512 0 498.7 0 482.3C0 383.8 79.8 304 178.3 304l91.4 0c17.5 0 34.3 2.5 50.3 7.2l0 33 0 .7c-15.7-5.7-32.6-8.9-50.3-8.9l-91.4 0c-80 0-145 64.3-146.3 144l384 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM545.9 491.3c-18.7 18.7-49.1 18.7-67.9 0L370.7 384c-12-12-18.7-28.3-18.7-45.3l0-82.7c0-17.7 14.3-32 32-32l82.7 0c17 0 33.3 6.7 45.3 18.7L619.3 350.1c18.7 18.7 18.7 49.1 0 67.9l-73.4 73.4zM384 256l0 82.7c0 8.5 3.4 16.6 9.4 22.6L500.7 468.7c6.2 6.2 16.4 6.2 22.6 0l73.4-73.4c6.2-6.2 6.2-16.4 0-22.6L489.4 265.4c-6-6-14.1-9.4-22.6-9.4L384 256zm24 40a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default UserTag;