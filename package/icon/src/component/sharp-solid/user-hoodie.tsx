
import { Icon } from "../../index";

/**
 * A component that renders the `user-hoodie` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-hoodie?s=sharp-solid user-hoodie}
 * @preview ![user-hoodie](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/user-hoodie.svg)
 */
const UserHoodie: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M327.3 282.2C362 252.9 384 209 384 160C384 71.6 312.4 0 224 0S64 71.6 64 160c0 49 22 92.9 56.7 122.2L118 304l-54 0L0 512l448 0L384 304l-54 0-2.7-21.8zM160 384l0 16 0 64 0 16-32 0 0-16 0-64 0-16 32 0zm160 0l0 16 0 64 0 16-32 0 0-16 0-64 0-16 32 0zM160 157.3c0 24 16 48.7 38.3 70.4c9 8.8 18.2 16.2 25.7 21.7c7.5-5.5 16.6-12.9 25.7-21.7C272 206 288 181.3 288 157.3c0-33-27.8-61.3-64-61.3s-64 28.3-64 61.3zm-32 0c0-51.5 43-93.3 96-93.3s96 41.8 96 93.3C320 232 224 288 224 288s-96-56-96-130.7z" />
    </Icon>
);

export default UserHoodie;