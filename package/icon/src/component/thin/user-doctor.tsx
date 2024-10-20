
import { Icon } from "../../index";

/**
 * A component that renders the `user-doctor` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-doctor?s=thin user-doctor}
 * @preview ![user-doctor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/user-doctor.svg)
 */
const UserDoctor: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 240a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM352 128A128 128 0 1 1 96 128a128 128 0 1 1 256 0zM152 322l0 46.7c22.7 3.8 40 23.6 40 47.3c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-23.8 17.3-43.5 40-47.3l0-43.4C66.9 343.5 16 406.4 16 481.2c0 8.2 6.6 14.8 14.8 14.8l386.4 0c8.2 0 14.8-6.6 14.8-14.8c0-74.8-50.9-137.7-120-155.9l0 43.4c22.7 3.8 40 23.6 40 47.3l0 40c0 4.4-3.6 8-8 8l-16 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l8 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32 8 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-16 0c-4.4 0-8-3.6-8-8l0-40c0-23.8 17.3-43.5 40-47.3l0-46.7c-8.2-1.3-16.6-2-25.2-2l-93.6 0c-8.6 0-17 .7-25.2 2zm-8 62a32 32 0 1 0 0 64 32 32 0 1 0 0-64zM0 481.2C0 383.3 79.3 304 177.2 304l93.6 0C368.7 304 448 383.3 448 481.2c0 17-13.8 30.8-30.8 30.8L30.8 512C13.8 512 0 498.2 0 481.2z" />
    </Icon>
);

export default UserDoctor;