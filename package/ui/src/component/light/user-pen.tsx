
import { Icon } from "../../index";

/**
 * A component that renders the `user-pen` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-pen?s=light user-pen}
 * @preview ![user-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/user-pen.svg)
 */
const UserPen: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM32 480l290.2 0-1 3.8c-2.4 9.5-1.8 19.3 1.4 28.2l-293 0C13.3 512 0 498.7 0 482.3C0 383.8 79.8 304 178.3 304l91.4 0c44.2 0 84.6 16.1 115.8 42.7l-22.7 22.7c-25.3-20.9-57.7-33.4-93.1-33.4l-91.4 0c-80 0-145 64.3-146.3 144zM582.8 264c-6.2-6.2-16.4-6.2-22.6 0l-24.8 24.8 40 40L600.2 304c6.2-6.2 6.2-16.4 0-22.6L582.8 264zM406.5 417.7c-2.1 2.1-3.5 4.6-4.2 7.4l-12.3 49 49-12.3c2.8-.7 5.4-2.2 7.4-4.2L552.7 351.4l-40-40L406.5 417.7zM537.5 241.4c18.7-18.7 49.1-18.7 67.9 0l17.4 17.4c18.7 18.7 18.7 49.1 0 67.9L469.1 480.3c-6.2 6.2-13.9 10.5-22.3 12.6l-74.9 18.7c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l18.7-74.9c2.1-8.4 6.5-16.1 12.6-22.3L537.5 241.4z" />
    </Icon>
);

export default UserPen;