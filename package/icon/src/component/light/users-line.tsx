
import { Icon } from "../../index";

/**
 * A component that renders the `users-line` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/users-line?s=light users-line}
 * @preview ![users-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/users-line.svg)
 */
const UsersLine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M147.2 160a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm352 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM369.6 288l-96 0c-35.3 0-64 28.7-64 64l224 0c0-35.3-28.7-64-64-64zm-192 64c0-53 43-96 96-96l96 0c53 0 96 43 96 96c0 17.7-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zm144-160a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0-128a80 80 0 1 1 0 160 80 80 0 1 1 0-160zM64 288l0 16c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-16c0-35.3 28.7-64 64-64l88 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-88 0c-17.7 0-32 14.3-32 32zm480-32l-88 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l88 0c35.3 0 64 28.7 64 64l0 16c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-16c0-17.7-14.3-32-32-32zM16 448l608 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 480c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default UsersLine;