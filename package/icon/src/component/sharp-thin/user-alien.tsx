
import { Icon } from "../../index";

/**
 * A component that renders the `user-alien` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-alien?s=sharp-thin user-alien}
 * @preview ![user-alien](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/user-alien.svg)
 */
const UserAlien: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M80 167C80 83 145.1 16 224 16s144 67 144 151c0 52.9-35.9 103.1-75.2 141.8c-19.3 19-38.7 34.4-53.3 45.1c-6.2 4.6-11.5 8.2-15.5 10.9c-4-2.7-9.3-6.4-15.5-10.9c-14.6-10.7-33.9-26.2-53.3-45.1C115.9 270.1 80 219.9 80 167zM224 0C135.6 0 64 74.8 64 167c0 119.3 160 217 160 217s160-97.7 160-217C384 74.8 312.4 0 224 0zM388.1 368l38.4 128-405 0L59.9 368l89 0c-5.8-5-11.9-10.3-18-16L48 352 4.8 496 0 512l16.7 0 414.6 0 16.7 0-4.8-16L400 352l-82.9 0c-6.1 5.7-12.1 11-18 16l89 0zM208 240c0-35.3-28.7-64-64-64l-24 0-8 0 0 8 0 8c0 35.3 28.7 64 64 64l24 0 8 0 0-8 0-8zm-64-48c26.5 0 48 21.5 48 48l-16 0c-26.5 0-48-21.5-48-48l16 0zm160-16c-35.3 0-64 28.7-64 64l0 8 0 8 8 0 24 0c35.3 0 64-28.7 64-64l0-8 0-8-8 0-24 0zm-48 64c0-26.5 21.5-48 48-48l16 0c0 26.5-21.5 48-48 48l-16 0z" />
    </Icon>
);

export default UserAlien;