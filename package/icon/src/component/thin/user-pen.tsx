
import { Icon } from "../../index";

/**
 * A component that renders the `user-pen` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-pen?s=thin user-pen}
 * @preview ![user-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/user-pen.svg)
 */
const UserPen: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M336 128a112 112 0 1 0 -224 0 112 112 0 1 0 224 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM16 482.3c0 7.6 6.1 13.7 13.7 13.7l290 0c0 5.5 1 10.9 2.8 16L29.7 512C13.3 512 0 498.7 0 482.3C0 383.8 79.8 304 178.3 304l91.4 0c48 0 91.7 19 123.7 49.9l-11.3 11.3C353 337.2 313.3 320 269.7 320l-91.4 0C88.7 320 16 392.7 16 482.3zm340.7 24.9c-4-4-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9L557.2 235.7c15.6-15.6 40.9-15.6 56.6 0l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6L446.9 487.9c-4.1 4.1-9.2 7-14.9 8.4l-3.4-13.6 3.4 13.6-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2zm15.7-28.9L368 495.8l17.6-4.4 42.5-10.6c2.8-.7 5.4-2.2 7.4-4.2L578.4 333.7l-48.3-48.3L387.2 428.3c-2 2.1-3.5 4.6-4.2 7.4l-10.6 42.5zM616.8 295.4c9.4-9.4 9.4-24.6 0-33.9L602.4 247c-9.4-9.4-24.6-9.4-33.9 0l-27.1 27.1 48.3 48.3 27.1-27.1z" />
    </Icon>
);

export default UserPen;