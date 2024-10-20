
import { Icon } from "../../index";

/**
 * A component that renders the `user-tie` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-tie?s=sharp-light user-tie}
 * @preview ![user-tie](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/user-tie.svg)
 */
const UserTie: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 32a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm96 176l-16 0 0 32 16 0 9.8 0-19.9 59.8L144 320l-80 0L10.7 480 0 512l33.7 0 170.5 0 39.6 0 170.5 0 33.7 0-10.7-32L384 320l-80 0-37.9 75.8L246.2 336l9.8 0 16 0 0-32-16 0-32 0-32 0zm14.1 140.2l-4-8L224 370.6l21.9 65.6-4 8L224 480s0 0 0 0s0 0 0 0l-17.9-35.8zM259.8 480l64-128 37.2 0 42.7 128-143.8 0zm-71.6 0L44.4 480 87.1 352l37.2 0 64 128z" />
    </Icon>
);

export default UserTie;