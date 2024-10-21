
import { Icon } from "../../index";

/**
 * A component that renders the `user-alien` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-alien?s=sharp-light user-alien}
 * @preview ![user-alien](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/user-alien.svg)
 */
const UserAlien: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 32C154.6 32 96 91.1 96 167c0 46.1 31.7 92.3 70.4 130.4c18.6 18.3 37.4 33.3 51.5 43.7c2.1 1.6 4.2 3 6.1 4.4c1.9-1.3 3.9-2.8 6.1-4.4c14.1-10.4 32.9-25.3 51.5-43.7C320.3 259.4 352 213.1 352 167c0-75.9-58.6-135-128-135zM64 167C64 74.8 135.6 0 224 0s160 74.8 160 167c0 119.3-160 217-160 217s-160-97.7-160-217zM168.6 384l-96.8 0L43 480l362 0-28.8-96-96.8 0c11.3-8.8 24.3-19.5 37.7-32l82.9 0 38.4 128 9.6 32-33.4 0L33.4 512 0 512l9.6-32L48 352l82.9 0c13.4 12.5 26.3 23.2 37.7 32zM149.1 176.8l48 16 15.2 5.1-10.1 30.4-15.2-5.1-48-16-15.2-5.1 10.1-30.4 15.2 5.1zm160 30.4l-48 16-15.2 5.1-10.1-30.4 15.2-5.1 48-16 15.2-5.1 10.1 30.4-15.2 5.1z" />
    </Icon>
);

export default UserAlien;