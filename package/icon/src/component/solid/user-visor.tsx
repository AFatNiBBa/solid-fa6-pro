
import { Icon } from "../../index";

/**
 * A component that renders the `user-visor` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-visor?s=solid user-visor}
 * @preview ![user-visor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/user-visor.svg)
 */
const UserVisor: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M343 175.2C324.2 222.5 278 256 224 256s-100.2-33.5-119-80.8c-14.3-3.2-25-16-25-31.2l0-64c0-17.7 14.3-32 32-32l12.1 0C147.5 18.7 183.6 0 224 0s76.5 18.7 99.9 48L336 48c17.7 0 32 14.3 32 32l0 64c0 15.3-10.7 28-25 31.2zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zm348.7-19.9c2.4 3.2 7.3 1.4 7.3-2.5c-1.1-35.3-11.3-65.6-30.1-90.2c-1.2-2-4.6-1.9-6.1-.1c-19.9 23-31.9 53-35.8 89.5c-.3 3.5 3.7 5.5 6.5 3.5c1.8-1.4 4.1-3.4 6.6-5.6c9.2-8.1 22.3-19.5 31.7-19.5c2.3 2 7.6 7.8 19.9 25zM144 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L144 96z" />
    </Icon>
);

export default UserVisor;