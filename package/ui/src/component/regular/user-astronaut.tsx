
import { Icon } from "../../index";

/**
 * A component that renders the `user-astronaut` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-astronaut?s=regular user-astronaut}
 * @preview ![user-astronaut](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/user-astronaut.svg)
 */
const UserAstronaut: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 48a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm181.2 80.4C379 53.6 307.8 0 224 0S69 53.6 42.8 128.4C27.6 130.9 16 144.1 16 160l0 64c0 15.9 11.6 29.1 26.8 31.6c9.7 27.6 25.5 52.4 45.8 72.6C35.6 359.1 0 416.5 0 482.3C0 498.7 13.3 512 29.7 512L160 512l0-48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48 226.3 0c16.4 0 29.7-13.3 29.7-29.7c0-65.8-35.6-123.2-88.6-154.1c20.3-20.2 36.2-45 45.8-72.6c15.2-2.5 26.8-15.7 26.8-31.6l0-64c0-15.9-11.6-29.1-26.8-31.6zM319.7 358.5c44.5 18 77.1 59.3 82.6 108.7l-66.4 0 0-19.2c0-17.7-14.3-32-32-32l-160 0c-17.7 0-32 14.3-32 32l0 19.2-66.4 0c5.6-49.5 38.1-90.7 82.6-108.7C156.5 374.7 189.1 384 224 384s67.5-9.3 95.7-25.5zM160 128c-26.5 0-48 21.5-48 48l0 16c0 53 43 96 96 96l32 0c53 0 96-43 96-96l0-16c0-26.5-21.5-48-48-48l-128 0zm39.3 45.5l6 21.2 21.2 6c3.3 .9 5.5 3.9 5.5 7.3s-2.2 6.4-5.5 7.3l-21.2 6-6 21.2c-.9 3.3-3.9 5.5-7.3 5.5s-6.4-2.2-7.3-5.5l-6-21.2-21.2-6c-3.3-.9-5.5-3.9-5.5-7.3s2.2-6.4 5.5-7.3l21.2-6 6-21.2c.9-3.3 3.9-5.5 7.3-5.5s6.4 2.2 7.3 5.5zM256 464a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default UserAstronaut;