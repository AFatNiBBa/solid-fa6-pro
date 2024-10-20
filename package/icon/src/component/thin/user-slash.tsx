
import { Icon } from "../../index";

/**
 * A component that renders the `user-slash` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-slash?s=thin user-slash}
 * @preview ![user-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/user-slash.svg)
 */
const UserSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 128C448 57.3 390.7 0 320 0c-51 0-95 29.8-115.6 73l12.9 10.2C234.6 43.6 274.1 16 320 16c61.9 0 112 50.1 112 112c0 36.6-17.5 69-44.6 89.5l12.9 10.2C429.4 204.2 448 168.3 448 128zm59.8 368l-382.1 0c-7.6 0-13.7-6.1-13.7-13.7C112 392.7 184.7 320 274.3 320l10.6 0-20-15.8C170.8 309.1 96 387 96 482.3c0 16.4 13.3 29.7 29.7 29.7l388.6 0c3.9 0 7.7-.8 11.1-2.1L507.8 496zM13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2L13 1.7z" />
    </Icon>
);

export default UserSlash;