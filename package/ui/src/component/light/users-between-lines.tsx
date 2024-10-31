
import { Icon } from "../../index";

/**
 * A component that renders the `users-between-lines` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/users-between-lines?s=light users-between-lines}
 * @preview ![users-between-lines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/users-between-lines.svg)
 */
const UsersBetweenLines: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 16C0 7.2 7.2 0 16 0L624 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 32C7.2 32 0 24.8 0 16zM0 496c0-8.8 7.2-16 16-16l608 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 512c-8.8 0-16-7.2-16-16zM147.2 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm352 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM369.6 320l-96 0c-35.3 0-64 28.7-64 64l224 0c0-35.3-28.7-64-64-64zm-192 64c0-53 43-96 96-96l96 0c53 0 96 43 96 96c0 17.7-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zm144-160a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0-128a80 80 0 1 1 0 160 80 80 0 1 1 0-160zM64 320l0 16c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-16c0-35.3 28.7-64 64-64l88 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-88 0c-17.7 0-32 14.3-32 32zm480-32l-88 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l88 0c35.3 0 64 28.7 64 64l0 16c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-16c0-17.7-14.3-32-32-32z" />
    </Icon>
);

export default UsersBetweenLines;