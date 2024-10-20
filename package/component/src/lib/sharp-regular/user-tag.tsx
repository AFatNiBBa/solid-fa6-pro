
import { Icon } from "../../index";

/**
 * A component that renders the `user-tag` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-tag?s=sharp-regular user-tag}
 * @preview ![user-tag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/user-tag.svg)
 */
const UserTag: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 48a80 80 0 1 1 0 160 80 80 0 1 1 0-160zM99.5 352L320 352l0-48-96 0L64 304 14.8 464 0 512l50.2 0 347.6 0 50.2 0-8.3-27.1-72.5-72.5L383 464 65 464 99.5 352zM352 128A128 128 0 1 0 96 128a128 128 0 1 0 256 0zM512 512L640 384 480 224l-96 0-32 32 0 96L512 512zM408 304a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default UserTag;