
import { Icon } from "../../index";

/**
 * A component that renders the `user-tie` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-tie?s=thin user-tie}
 * @preview ![user-tie](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/user-tie.svg)
 */
const UserTie: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 240a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM352 128A128 128 0 1 1 96 128a128 128 0 1 1 256 0zM176.9 308.3c1.4-2.7 4.1-4.3 7.1-4.3l80 0c3 0 5.7 1.7 7.1 4.3s1.1 5.9-.6 8.3l-37.2 52.1 23.2 46.3 47.1-94.2c81.2 8.4 144.4 77 144.4 160.4c0 17-13.8 30.7-30.7 30.7l-191.4 0-3.8 0L30.7 512C13.8 512 0 498.2 0 481.3c0-83.4 63.3-152 144.4-160.4l47.1 94.2 23.2-46.3-37.2-52.1c-1.7-2.4-2-5.6-.6-8.3zM199.5 320L224 354.2 248.5 320l-48.9 0zm10.1 167.2L135.3 338.3C67.5 350.6 16 409.9 16 481.3c0 8.1 6.6 14.7 14.7 14.7l183.4 0-4.4-8.8zm-9.2-54.2l14.6 29.2L224 480l8.9-17.9 14.6-29.2L224 385.9l-23.5 47.1zM432 481.3c0-71.4-51.5-130.7-119.3-143L238.3 487.2l-4.4 8.8 183.4 0c8.1 0 14.7-6.6 14.7-14.7z" />
    </Icon>
);

export default UserTie;