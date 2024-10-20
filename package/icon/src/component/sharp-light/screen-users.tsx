
import { Icon } from "../../index";

/**
 * A component that renders the `screen-users` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/screen-users?s=sharp-light screen-users}
 * @preview ![screen-users](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/screen-users.svg)
 */
const ScreenUsers: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M576 32L64 32l0 197.5c-11.9 4.2-22.8 10.7-32 19L32 32 32 0 64 0 576 0l32 0 0 32 0 216.4c-9.2-8.3-20.1-14.8-32-19L576 32zM96 352a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm224 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm256 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-96 0a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM55.1 448L33.7 512 0 512l32-96 128 0 32 96-33.7 0-21.3-64-81.9 0zm202.7 64L224 512l32-96 128 0 32 96-33.7 0-21.3-64-81.9 0-21.3 64zm245.3-64l-21.3 64L448 512l32-96 128 0 32 96-33.7 0-21.3-64-81.9 0z" />
    </Icon>
);

export default ScreenUsers;