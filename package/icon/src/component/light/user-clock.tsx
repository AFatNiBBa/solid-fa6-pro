
import { Icon } from "../../index";

/**
 * A component that renders the `user-clock` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-clock?s=light user-clock}
 * @preview ![user-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/user-clock.svg)
 */
const UserClock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 128a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0A128 128 0 1 0 96 128a128 128 0 1 0 256 0zM32 480c1.2-79.7 66.2-144 146.3-144l91.4 0c18.2 0 35.6 3.3 51.7 9.4c1.4-10.8 3.8-21.4 7-31.5c-18.4-6.4-38.2-9.9-58.8-9.9l-91.4 0C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l365.1 0c-12.9-9.1-24.5-19.9-34.6-32L32 480zM496 256a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm0 256a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm0-224c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-48c0-8.8-7.2-16-16-16z" />
    </Icon>
);

export default UserClock;