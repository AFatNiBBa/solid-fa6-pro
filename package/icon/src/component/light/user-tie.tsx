
import { Icon } from "../../index";

/**
 * A component that renders the `user-tie` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-tie?s=light user-tie}
 * @preview ![user-tie](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/user-tie.svg)
 */
const UserTie: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 32a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm96 176c-8.8 0-16 7.2-16 16s7.2 16 16 16l9.8 0-21.7 65-32.1-69.5c-2.9-6.3-9.5-10-16.3-8.8C56.8 336.5 0 402.3 0 481.3c0 17 13.8 30.7 30.7 30.7l386.6 0c17 0 30.7-13.8 30.7-30.7c0-79-56.8-144.7-131.8-158.6c-6.8-1.3-13.4 2.5-16.3 8.8L267.9 401l-21.7-65 9.8 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0-32 0zm17.5 160.5l-9.7-21.1L224 370.6l24.3 72.8-9.7 21.1c-5.7 12.4-23.3 12.4-29.1 0zm-29.1 13.4c.3 .7 .7 1.4 1 2.1L32 480c.6-58.1 39.5-107.1 92.7-122.8l55.7 120.7zM416 480l-149.4 0c.3-.7 .7-1.4 1-2.1l55.7-120.7c53.2 15.7 92.1 64.6 92.7 122.8z" />
    </Icon>
);

export default UserTie;