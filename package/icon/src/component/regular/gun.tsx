
import { Icon } from "../../index";

/**
 * A component that renders the `gun` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gun?s=regular gun}
 * @preview ![gun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/gun.svg)
 */
const Gun: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M528 56c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 8L40 64C17.9 64 0 81.9 0 104l0 96c0 22.1 17.9 40 40 40l2 0c20.8 0 36.1 19.6 31 39.8L33 440.2c-2.4 9.6-.2 19.7 5.8 27.5S54.1 480 64 480l112 0c14.7 0 27.5-10 31-24.2L233 352l88.5 0c23.7 0 44.8-14.9 52.7-37.2L400.9 240l32.5 0c10.6 0 20.8-4.2 28.3-11.7L481.9 208l54.1 0c22.1 0 40-17.9 40-40l0-64c0-22.1-17.9-40-40-40l-8 0 0-8zM245 304l16-64 89 0-21 58.7c-1.1 3.2-4.2 5.3-7.5 5.3L245 304zm-33.5-64l-48 192-79 0 35.1-140.6c4.5-18.1 2.5-35.9-4.3-51.4l96.1 0zM267 192l-48 0L68.8 192 48 192l0-80 456 0 24 0 0 48-49.4 0c-10.6 0-20.8 4.2-28.3 11.7L430.1 192l-163 0z" />
    </Icon>
);

export default Gun;