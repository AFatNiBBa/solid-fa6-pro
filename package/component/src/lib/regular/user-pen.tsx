
import { Icon } from "../../index";

/**
 * A component that renders the `user-pen` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-pen?s=regular user-pen}
 * @preview ![user-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/user-pen.svg)
 */
const UserPen: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 208a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zM49.3 464l277.2 0-5.1 20.2c-2.3 9.4-1.8 19 1.4 27.8L29.7 512C13.3 512 0 498.7 0 482.3C0 383.8 79.8 304 178.3 304l45.7 0 45.7 0c48.1 0 91.8 19.1 123.9 50.1L359.6 388c-23.4-22.3-55.1-36-89.9-36l-91.4 0c-65.7 0-120.1 48.7-129 112zM613.8 235.7l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-29.4 29.4-71-71 29.4-29.4c15.6-15.6 40.9-15.6 56.6 0zM375.9 417L505.1 287.8l71 71L446.9 487.9c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9z" />
    </Icon>
);

export default UserPen;