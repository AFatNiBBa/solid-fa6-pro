
import { Icon } from "../../index";

/**
 * A component that renders the `user-injured` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-injured?s=light user-injured}
 * @preview ![user-injured](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/user-injured.svg)
 */
const UserInjured: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M320 128c0 53-43 96-96 96s-96-43-96-96c0-5.5 .5-10.8 1.3-16l62.7 0 126.7 0c.9 5.2 1.3 10.5 1.3 16zM307.2 80l-69.5 0 39.8-31.8c12.2 8.2 22.4 19.1 29.8 31.8zM243.8 34L186.4 80l-45.5 0c16.6-28.7 47.6-48 83.2-48c6.8 0 13.4 .7 19.8 2zM352 128A128 128 0 1 0 96 128a128 128 0 1 0 256 0zM32 480c.5-33.7 12.4-64.6 32-89l0 89-32 0zm64 0l0-118.7c12.9-8.8 27.3-15.6 42.7-19.9L226.9 480 96 480zm224-32c0 17.7-14.3 32-32 32l-23.2 0-40.7-64 63.9 0c17.7 0 32 14.3 32 32zM80 512l80 0 16 0 112 0 130.3 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512L80 512zm336-32l-72.5 0c5.4-9.4 8.6-20.3 8.6-32c0-35.3-28.7-64-64-64l-84.3 0-30.5-47.9c1.7-.1 3.4-.1 5.1-.1l91.4 0c80 0 145 64.3 146.3 144z" />
    </Icon>
);

export default UserInjured;