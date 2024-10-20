
import { Icon } from "../../index";

/**
 * A component that renders the `users-slash` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/users-slash?s=sharp-thin users-slash}
 * @preview ![users-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/users-slash.svg)
 */
const UsersSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M416 224c0-53-43-96-96-96c-13 0-25.4 2.6-36.7 7.3L298.2 147c6.9-2 14.3-3 21.8-3c44.2 0 80 35.8 80 80c0 1.1 0 2.3-.1 3.4l14.9 11.8c.8-4.9 1.2-10 1.2-15.1zM224 80c0-44.2-35.8-80-80-80c-9.3 0-18.1 1.6-26.4 4.5l15.7 12.4c3.5-.6 7-.9 10.7-.9c33.9 0 61.7 26.4 63.9 59.7l15.7 12.4c.3-2.7 .4-5.4 .4-8.2zM48 192L6 304l17.1 0 36-96 83.9 0-20.3-16L48 192zM176 352L132.8 496 128 512l16.7 0 350.6 0 16.7 0-4.8-16-.2-.6-21.9-17.3 5.4 17.9-341 0 38.4-128 157.8 0-20.3-16L176 352zM444 192c1.3 5.2 2.4 10.6 3 16l133.9 0 36 96 17.1 0L592 192l-148 0zm4-112a64 64 0 1 1 128 0A64 64 0 1 1 448 80zm144 0A80 80 0 1 0 432 80a80 80 0 1 0 160 0zM16.2 5L9.9 0 0 12.5l6.3 5L623.8 507l6.3 5 9.9-12.5-6.3-5L16.2 5z" />
    </Icon>
);

export default UsersSlash;