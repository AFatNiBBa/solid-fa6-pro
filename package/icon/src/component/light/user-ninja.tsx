
import { Icon } from "../../index";

/**
 * A component that renders the `user-ninja` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-ninja?s=light user-ninja}
 * @preview ![user-ninja](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/user-ninja.svg)
 */
const UserNinja: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M320 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zm32 0c0 70.7-57.3 128-128 128c-63.6 0-116.3-46.3-126.3-107.1L59.3 187.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L89.4 112 36.7 59.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l45.2 45.2C123 34 169.6 0 224 0c70.7 0 128 57.3 128 128zM211.1 452.9L128.6 344.7C72.9 364.8 33 417.7 32 480l199.7 0-20.2-26.5c-.1-.2-.3-.4-.4-.6zm33.1-9.4L271.9 480 416 480c-1-62.3-40.9-115.2-96.6-135.3l-75.3 98.8zM418.3 512l-154.1 0-.4 0L29.7 512C13.3 512 0 498.7 0 482.3C0 399.5 56.4 330 132.8 309.9c6-1.6 12.2 .9 15.9 5.8l62.5 83.3c6.4 8.5 19.2 8.5 25.6 0l62.5-83.3c3.7-4.9 9.9-7.4 15.9-5.8C391.6 330 448 399.5 448 482.3c0 16.4-13.3 29.7-29.7 29.7zM176 96l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default UserNinja;