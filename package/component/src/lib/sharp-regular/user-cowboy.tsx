
import { Icon } from "../../index";

/**
 * A component that renders the `user-cowboy` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-cowboy?s=sharp-regular user-cowboy}
 * @preview ![user-cowboy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/user-cowboy.svg)
 */
const UserCowboy: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M364.2 105.1c-7.7 3-16.2 5.9-25.6 8.6L288 0 224 32 160 0 109.5 113.7c-9.4-2.7-17.9-5.6-25.6-8.6c-32.4-12.7-49.4-27.2-55-34.7L.8 85.1c9.3 27.9 35 62.4 72.5 89.9c7.4 5.4 15.4 10.6 23.8 15.5C96.4 196.1 96 202 96 208c0 70.7 57.3 128 128 128s128-57.3 128-128c0-6-.4-11.9-1.2-17.6c8.4-4.8 16.4-10 23.8-15.5c37.6-27.4 63.2-62 72.5-89.9l-28-14.7c-5.6 7.5-22.7 22-55 34.7zM303.9 211.3C302.2 253.9 267.1 288 224 288s-78.2-34.1-79.9-76.7c24.2 8 50.9 12.7 79.9 12.7s55.8-4.8 79.9-12.7zM66.6 464l16-48 282.8 0 16 48L66.6 464zM48 368L16 464 0 512l50.6 0 346.8 0 50.6 0-16-48-32-96L48 368z" />
    </Icon>
);

export default UserCowboy;