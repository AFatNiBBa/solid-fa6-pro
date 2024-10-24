
import { Icon } from "../../index";

/**
 * A component that renders the `user-tag` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-tag?s=sharp-light user-tag}
 * @preview ![user-tag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/user-tag.svg)
 */
const UserTag: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 32a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM87.6 336L320 336l0-32L64 304 9.8 480 0 512l33.5 0 381 0 33.5 0-8.3-27.1-48.4-48.4L404.7 480 43.3 480 87.6 336zM352 128A128 128 0 1 0 96 128a128 128 0 1 0 256 0zM617.4 361.4L480 224l-96 0-32 32 0 96L489.4 489.4 512 512l22.6-22.6 82.7-82.7L640 384l-22.6-22.6zM466.7 256l128 128L512 466.7l-128-128 0-69.5L397.3 256l69.5 0zM440 296a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default UserTag;