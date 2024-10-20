
import { Icon } from "../../index";

/**
 * A component that renders the `user-shakespeare` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-shakespeare?s=sharp-regular user-shakespeare}
 * @preview ![user-shakespeare](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/user-shakespeare.svg)
 */
const UserShakespeare: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 48c-44.2 0-80 35.8-80 80l0 32c0 40.1 29.5 73.3 68 79.1l0-15.1 0-12 24 0 0 12 0 15.1c38.5-5.8 68-39 68-79.1l0-32c0-44.2-35.8-80-80-80zM96 128C96 57.3 153.3 0 224 0s128 57.3 128 128l0 32 0 8 32 40 0 64-98 0c-18.4 10.2-39.5 16-62 16s-43.6-5.8-62-16l-98 0 0-64 32-40 0-8 0-32zm96-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm48 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm-16 31l8.5 8.5c2 2 6 5.3 10.7 8.1c4.9 2.9 9.4 4.4 12.8 4.4l12 0 0 24-12 0c-9.5 0-18.3-3.8-24.8-7.6c-2.5-1.5-4.9-3.1-7.1-4.6C211.6 201 199 204 192 204l-12 0 0-24 12 0c2.1 0 12.9-1.9 23.5-12.5L224 159zm16 257c0 8.8-7.2 16-16 16s-16-7.2-16-16l-64 0L96 448l0-57.7 0-14.5L66.6 464 208 464c0-8.8 7.2-16 16-16s16 7.2 16 16l141.4 0L352 375.8l0 14.5 0 57.7-48-32-64 0zm64-56l-8-8-144 0-8 8 0 8 160 0 0-8zM112 320l16-16 192 0 16 16 48 0 48 144 16 48-50.6 0L50.6 512 0 512l16-48L64 320l48 0z" />
    </Icon>
);

export default UserShakespeare;