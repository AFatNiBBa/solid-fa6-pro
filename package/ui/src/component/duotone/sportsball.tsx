
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sportsball` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sportsball?s=duotone sportsball}
 * @preview ![sportsball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/sportsball.svg)
 */
const Sportsball: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M24.9 257.2c55.1 5.3 105.1 28.1 144.4 62.8c21.3-21.3 42.7-42.7 64-64c-46.6-46.6-93.3-93.3-139.9-139.9C83.2 127.9 74.1 140.5 66 153.6c-19.8 32.3-33 67.7-41.1 103.6zM47.2 487.4c1.1 .3 2.2 .5 3.3 .7c65.6 11 122.9 12.5 172.8 6c-3.9-49.1-23.6-93.7-54-128.8C128.6 406 87.9 446.7 47.2 487.4zM115.8 93.2L256 233.4c21.3-21.3 42.7-42.7 64-64C285 129.7 262.1 79 257 23.3c-17 3.6-33 8.3-48.1 13.9c-37 13.7-67.8 33-93.1 56zM192 342.6c35 39.7 58 90.3 63 146.1c17-3.6 33-8.3 48.1-13.9c37-13.7 67.8-33 93.1-56c-46.7-46.7-93.5-93.5-140.2-140.2c-21.3 21.3-42.7 42.7-64 64zM278.6 256L418.5 395.9c10.3-11.8 19.4-24.4 27.4-37.5c19.8-32.3 33-67.7 41.1-103.6c-55.1-5.3-105.1-28.1-144.4-62.8l-64 64zM288.7 17.9c3.9 49.1 23.6 93.7 54 128.8C383.4 106 424.1 65.3 464.8 24.6c-1.1-.3-2.2-.5-3.3-.7C421.6 17.2 384.8 14 350.8 14c-21.9 0-42.6 1.3-62.1 3.9zm76.6 151.4c34.8 30.2 79 49.8 127.6 53.9c3.5-23.8 5-47.5 5-70.4c0-37.8-4.2-73.5-10.4-103.9c-.1-.5-.2-1-.3-1.5c-40.6 40.6-81.3 81.3-121.9 121.9z" />
        <path d="M464.8 24.6L256 233.4 115.8 93.2c-8 7.3-15.4 14.9-22.3 22.9L233.4 256 24.8 464.6c2.9 11.1 11.4 19.8 22.4 22.9L256 278.6 396.2 418.8c8-7.3 15.4-14.9 22.3-22.9L278.6 256 487.2 47.4c-2.9-11.1-11.4-19.8-22.4-22.9z" />
    </Icon>
);

export default Sportsball;