
import { Icon, generic } from "../../index";

/**
 * A component that renders the `users-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/users-slash?s=duotone users-slash}
 * @preview ![users-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/users-slash.svg)
 */
const UsersSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 298.7C0 310.4 9.6 320 21.3 320l213.3 0c.2 0 .4 0 .7 0c-20.6-18.2-35.2-42.8-40.8-70.8L121.8 192l-15.2 0C47.8 192 0 239.8 0 298.7zM77.5 35.5c41.9 32.8 83.7 65.6 125.6 98.4c13-14.2 20.9-33.1 20.9-53.9c0-44.2-35.8-80-80-80C116.3 0 91.9 14.1 77.5 35.5zM128 485.3c0 14.7 11.9 26.7 26.7 26.7l330.7 0c10.5 0 19.5-6 23.9-14.8L324.9 352l-63.6 0C187.7 352 128 411.7 128 485.3zM243.7 165.7c50.4 39.5 100.7 79 151.1 118.4C408.1 267.7 416 246.8 416 224c0-53-43-96-96-96c-31.1 0-58.7 14.8-76.3 37.7zM420 303.9c6.9 5.4 13.7 10.7 20.5 16.1l178.1 0c11.8 0 21.3-9.6 21.3-21.3C640 239.8 592.2 192 533.3 192l-42.7 0c-15.9 0-31 3.5-44.6 9.7c1.3 7.2 1.9 14.7 1.9 22.3c0 30.2-10.5 58-28 79.9zM432 80a80 80 0 1 0 160 0A80 80 0 1 0 432 80z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default UsersSlash;