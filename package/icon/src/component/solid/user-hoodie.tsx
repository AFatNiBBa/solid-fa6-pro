
import { Icon } from "../../index";

/**
 * A component that renders the `user-hoodie` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-hoodie?s=solid user-hoodie}
 * @preview ![user-hoodie](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/user-hoodie.svg)
 */
const UserHoodie: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M118.8 297.6c-1.3 10.6-8.6 19.5-18.2 24.2C41 350.7 0 411.7 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7c0-70.6-41-131.6-100.6-160.5c-9.6-4.7-16.9-13.5-18.2-24.2c-1.2-9.6 2.7-19.1 9.4-26C366.7 242.8 384 203.4 384 160C384 71.6 312.4 0 224 0S64 71.6 64 160c0 43.4 17.3 82.8 45.4 111.6c6.8 6.9 10.6 16.4 9.4 26zM224 96c-36.2 0-64 28.3-64 61.3c0 17.5 8.5 35.8 22.9 53.6c13.1 16.2 29 29.5 41.1 38.5c12.1-8.9 28-22.3 41.1-38.5c14.4-17.9 22.9-36.1 22.9-53.6c0-33-27.8-61.3-64-61.3zm-96 61.3c0-51.5 43-93.3 96-93.3s96 41.8 96 93.3c0 55.6-53.3 100.9-80.5 120.4c-9.4 6.7-21.7 6.7-31.1 0C181.3 258.2 128 213 128 157.3zM160 400l0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16s16 7.2 16 16zm160 0l0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
    </Icon>
);

export default UserHoodie;