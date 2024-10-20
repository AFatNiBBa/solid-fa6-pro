
import { Icon } from "../../index";

/**
 * A component that renders the `user-clock` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-clock?s=sharp-regular user-clock}
 * @preview ![user-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/user-clock.svg)
 */
const UserClock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM65 464l283.5 0c12.3 18.8 28 35.1 46.3 48L50.2 512 0 512l14.8-48L64 304l268 0c-5.9 15.1-9.8 31.2-11.3 48L99.5 352 65 464zm287-96a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm160-80l-32 0 0 16 0 64 0 16 16 0 48 0 16 0 0-32-16 0-32 0 0-48 0-16z" />
    </Icon>
);

export default UserClock;