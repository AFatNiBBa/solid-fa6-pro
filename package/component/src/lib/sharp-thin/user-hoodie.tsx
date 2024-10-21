
import { Icon } from "../../index";

/**
 * A component that renders the `user-hoodie` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-hoodie?s=sharp-thin user-hoodie}
 * @preview ![user-hoodie](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/user-hoodie.svg)
 */
const UserHoodie: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M310.3 275.6l6.6-5.6c31.3-26.4 51.1-65.9 51.1-110c0-79.5-64.5-144-144-144S80 80.5 80 160c0 44.1 19.8 83.6 51.1 110l6.6 5.6-1.1 8.6L133.9 306l-1.8 14L118 320l-42.2 0L21.7 496l404.7 0L372.2 320 330 320l-14.1 0-1.8-14-2.7-21.8-1.1-8.6zM384 304l59.1 192 4.9 16-16.7 0L16.7 512 0 512l4.9-16L64 304l54 0 2.7-21.8C86 252.9 64 209 64 160C64 71.6 135.6 0 224 0s160 71.6 160 160c0 49-22 92.9-56.7 122.2L330 304l54 0zM224 80c-44.6 0-80 35-80 77.3c0 30.6 20 59.3 43.2 81.9c11.3 11 22.6 19.8 31.1 25.9c2.1 1.5 4 2.8 5.7 4c1.7-1.1 3.6-2.5 5.7-4c8.5-6.1 19.9-14.9 31.1-25.9C284 216.7 304 188 304 157.3C304 115 268.6 80 224 80zm0 208s-96-56-96-130.7c0-51.5 43-93.3 96-93.3s96 41.8 96 93.3C320 232 224 288 224 288zm-64 88l0 64 0 8-16 0 0-8 0-64 0-8 16 0 0 8zm144 0l0 64 0 8-16 0 0-8 0-64 0-8 16 0 0 8z" />
    </Icon>
);

export default UserHoodie;