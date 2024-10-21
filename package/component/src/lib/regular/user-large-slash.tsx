
import { Icon } from "../../index";

/**
 * A component that renders the `user-large-slash` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-large-slash?s=regular user-large-slash}
 * @preview ![user-large-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/user-large-slash.svg)
 */
const UserLargeSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L381.9 274c48.5-23.2 82.1-72.7 82.1-130C464 64.5 399.5 0 320 0C250.4 0 192.4 49.3 178.9 114.9L38.8 5.1zM224.2 150.4c-.1-2.1-.2-4.3-.2-6.4c0-53 43-96 96-96s96 43 96 96c0 47.3-34.3 86.7-79.3 94.6L224.2 150.4zM545.5 512L528 512l-60.9-48-353.8 0c8.3-54.4 55.3-96 112-96l119.9 0-60.9-48-59 0C136.2 320 64 392.2 64 481.3c0 17 13.8 30.7 30.7 30.7l450.6 0 .3 0z" />
    </Icon>
);

export default UserLargeSlash;