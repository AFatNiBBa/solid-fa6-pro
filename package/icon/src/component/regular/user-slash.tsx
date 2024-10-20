
import { Icon } from "../../index";

/**
 * A component that renders the `user-slash` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-slash?s=regular user-slash}
 * @preview ![user-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/user-slash.svg)
 */
const UserSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L353.3 251.6C407.9 237 448 187.2 448 128C448 57.3 390.7 0 320 0C250.2 0 193.5 55.8 192 125.2L38.8 5.1zM290.5 202.4l-35.6-27.9C245.5 161.4 240 145.3 240 128c0-44.2 35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80c-10.4 0-20.4-2-29.5-5.6zM264.3 304.3C170.5 309.4 96 387.2 96 482.3c0 16.4 13.3 29.7 29.7 29.7l388.6 0c3.9 0 7.6-.7 11-2.1L467.1 464l-321.8 0c8.9-63.3 63.3-112 129-112l50.6 0-60.6-47.7z" />
    </Icon>
);

export default UserSlash;