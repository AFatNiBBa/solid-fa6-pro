
import { Icon } from "../../index";

/**
 * A component that renders the `user-alien` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-alien?s=light user-alien}
 * @preview ![user-alien](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/user-alien.svg)
 */
const UserAlien: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 32C154.6 32 96 91.1 96 167c0 39.5 21.1 78.5 49.8 112.7c28.3 33.6 60.7 58.7 76 69.6c.1 .1 .8 .5 2.2 .5s2.1-.4 2.2-.5c15.2-10.9 47.7-35.9 76-69.6C330.9 245.5 352 206.5 352 167c0-75.9-58.6-135-128-135zM64 167C64 74.8 135.6 0 224 0s160 74.8 160 167c0 101-106.6 185-139.2 208.3c-6.1 4.3-13.4 6.5-20.8 6.5s-14.7-2.1-20.8-6.5C170.6 352 64 268.1 64 167zm62.1 185.2c12.8 12.5 25.1 23.2 35.8 31.7l-27.4 0C80 384 35.5 426.4 32.2 480l383.6 0c-3.3-53.6-47.8-96-102.2-96l-27.4 0c10.6-8.6 23-19.3 35.8-31.7C392.3 356.6 448 415 448 486.4c0 14.1-11.5 25.6-25.6 25.6L25.6 512C11.5 512 0 500.5 0 486.4C0 415 55.7 356.6 126.1 352.3zm23-175.4l48 16c8.4 2.8 12.9 11.9 10.1 20.2s-11.9 12.9-20.2 10.1l-48-16c-8.4-2.8-12.9-11.9-10.1-20.2s11.9-12.9 20.2-10.1zm160 30.4l-48 16c-8.4 2.8-17.4-1.7-20.2-10.1s1.7-17.4 10.1-20.2l48-16c8.4-2.8 17.4 1.7 20.2 10.1s-1.7 17.4-10.1 20.2z" />
    </Icon>
);

export default UserAlien;