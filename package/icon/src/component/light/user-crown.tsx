
import { Icon } from "../../index";

/**
 * A component that renders the `user-crown` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-crown?s=light user-crown}
 * @preview ![user-crown](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/user-crown.svg)
 */
const UserCrown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M238.7 4.4C234.3 1.5 229.2 0 224 0s-10.3 1.5-14.7 4.4L176.9 26.1c-5.4 3.6-12.4 3.6-17.8 0L124 2.7C121.4 .9 118.3 0 115.2 0L112 0c-8.8 0-16 7.2-16 16l0 112 0 16c0 70.7 57.3 128 128 128s128-57.3 128-128l0-16 0-112c0-8.8-7.2-16-16-16l-3.2 0c-3.2 0-6.2 .9-8.9 2.7L288.9 26.1c-5.4 3.6-12.4 3.6-17.8 0L238.7 4.4zM320 112l-192 0 0-68.2 13.4 8.9c16.1 10.7 37.1 10.7 53.3 0L224 33.1l29.4 19.6c16.1 10.7 37.1 10.7 53.3 0L320 43.8l0 68.2zM128 144l192 0c0 53-43 96-96 96s-96-43-96-96zm40 192l112 0c75.1 0 136 60.9 136 136l0 8L32 480l0-8c0-75.1 60.9-136 136-136zm0-32C75.2 304 0 379.2 0 472l0 8c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-8c0-92.8-75.2-168-168-168l-112 0z" />
    </Icon>
);

export default UserCrown;