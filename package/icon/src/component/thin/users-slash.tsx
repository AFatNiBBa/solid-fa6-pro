
import { Icon } from "../../index";

/**
 * A component that renders the `users-slash` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/users-slash?s=thin users-slash}
 * @preview ![users-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/users-slash.svg)
 */
const UsersSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M144 16c33.9 0 61.7 26.4 63.9 59.7l15.7 12.4c.3-2.7 .4-5.4 .4-8.2c0-44.2-35.8-80-80-80c-9.3 0-18.1 1.6-26.4 4.5l15.7 12.4c3.5-.6 7-.9 10.7-.9zM104 192C46.6 192 0 238.6 0 296c0 4.4 3.6 8 8 8s8-3.6 8-8c0-48.6 39.4-88 88-88l39 0-20.3-16L104 192zM261.3 352C187.7 352 128 411.7 128 485.3c0 14.7 11.9 26.7 26.7 26.7l330.7 0c10.5 0 19.6-6.1 23.9-14.9l-13.3-10.5c-.6 5.3-5.1 9.4-10.6 9.4l-330.7 0c-5.9 0-10.7-4.8-10.7-10.7C144 420.5 196.5 368 261.3 368l84.3 0-20.3-16-64.1 0zM416 224c0-53-43-96-96-96c-13 0-25.4 2.6-36.7 7.3L298.2 147c6.9-2 14.3-3 21.8-3c44.2 0 80 35.8 80 80c0 1.1 0 2.3-.1 3.4l14.9 11.8c.8-4.9 1.2-10 1.2-15.1zM512 16a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm0 144A80 80 0 1 0 512 0a80 80 0 1 0 0 160zm24 48c48.6 0 88 39.4 88 88c0 4.4 3.6 8 8 8s8-3.6 8-8c0-57.4-46.6-104-104-104l-92 0c1.3 5.2 2.4 10.6 3 16l89 0zM13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2L13 1.7z" />
    </Icon>
);

export default UsersSlash;