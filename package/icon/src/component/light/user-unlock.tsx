
import { Icon } from "../../index";

/**
 * A component that renders the `user-unlock` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-unlock?s=light user-unlock}
 * @preview ![user-unlock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/user-unlock.svg)
 */
const UserUnlock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 224a96 96 0 1 0 0-192 96 96 0 1 0 0 192zM224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zM178.3 336c-80 0-145 64.3-146.3 144l352 0c0 11.7 3.1 22.6 8.6 32L29.7 512C13.3 512 0 498.7 0 482.3C0 383.8 79.8 304 178.3 304l91.4 0c43.6 0 83.6 15.7 114.6 41.7c-.2 2.1-.3 4.2-.3 6.3l0 39c-26.8-33.5-68-55-114.3-55l-91.4 0zM480 272l0 48 32 0 64 0 32 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32l0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l-32 0c0-26.5-21.5-48-48-48s-48 21.5-48 48zM448 480l160 0 0-128-160 0 0 128z" />
    </Icon>
);

export default UserUnlock;