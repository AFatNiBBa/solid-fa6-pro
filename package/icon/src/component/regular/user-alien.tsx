
import { Icon } from "../../index";

/**
 * A component that renders the `user-alien` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-alien?s=regular user-alien}
 * @preview ![user-alien](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/user-alien.svg)
 */
const UserAlien: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M112 167c0-67.7 52.1-119 112-119s112 51.3 112 119c0 33.9-18.3 69.4-46.1 102.4c-23.3 27.7-49.6 49.4-65.9 61.6c-16.3-12.2-42.6-34-65.9-61.6C130.3 236.4 112 201 112 167zM224 0C135.6 0 64 74.8 64 167c0 101 106.6 185 139.2 208.3c6.1 4.3 13.4 6.5 20.8 6.5s14.7-2.1 20.8-6.5C277.4 352 384 268.1 384 167C384 74.8 312.4 0 224 0zM0 486.4C0 500.5 11.5 512 25.6 512l396.8 0c14.1 0 25.6-11.5 25.6-25.6c0-71.4-55.7-129.8-126.1-134.1c-22.6 22.1-44 38.6-56.7 47.7l48.3 0c40 0 73.6 27.1 83.5 64L50.9 464c9.9-36.9 43.5-64 83.5-64l48.3 0c-12.7-9.2-34-25.6-56.7-47.7C55.7 356.6 0 415 0 486.4zM208 222.9c0-30.3-24.6-54.9-54.9-54.9l-16 0c-5 0-9.1 4.1-9.1 9.1c0 30.3 24.6 54.9 54.9 54.9l16 0c5 0 9.1-4.1 9.1-9.1zM294.9 168c-30.3 0-54.9 24.6-54.9 54.9c0 5 4.1 9.1 9.1 9.1l16 0c30.3 0 54.9-24.6 54.9-54.9c0-5-4.1-9.1-9.1-9.1l-16 0z" />
    </Icon>
);

export default UserAlien;