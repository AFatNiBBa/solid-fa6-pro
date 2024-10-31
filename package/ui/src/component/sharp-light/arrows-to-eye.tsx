
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-to-eye` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-to-eye?s=sharp-light arrows-to-eye}
 * @preview ![arrows-to-eye](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrows-to-eye.svg)
 */
const ArrowsToEye: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 9.4L9.4 32 20.7 43.3 105.4 128 48 128l-16 0 0 32 16 0 96 0 16 0 0-16 0-96 0-16-32 0 0 16 0 57.4L43.3 20.7 32 9.4zM596.7 20.7L512 105.4 512 48l0-16-32 0 0 16 0 96 0 16 16 0 96 0 16 0 0-32-16 0-57.4 0 84.7-84.7L630.6 32 608 9.4 596.7 20.7zM630.6 480l-11.3-11.3L534.6 384l57.4 0 16 0 0-32-16 0-96 0-16 0 0 16 0 96 0 16 32 0 0-16 0-57.4 84.7 84.7L608 502.6 630.6 480zM9.4 480L32 502.6l11.3-11.3L128 406.6l0 57.4 0 16 32 0 0-16 0-96 0-16-16 0-96 0-16 0 0 32 16 0 57.4 0L20.7 468.7 9.4 480zM320 208a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 128a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM213.7 322.6c-23.3-21.6-40.3-46.9-50.4-66.6c10.1-19.6 27.1-44.9 50.4-66.6C242 163.2 277.6 144 320 144s78 19.2 106.3 45.4c23.3 21.6 40.3 46.9 50.4 66.6c-10.1 19.6-27.1 44.9-50.4 66.6C398 348.8 362.4 368 320 368s-78-19.2-106.3-45.4zM320 400c105.6 0 172-96 192-144c-20-48-86.4-144-192-144s-172 96-192 144c20 48 86.4 144 192 144z" />
    </Icon>
);

export default ArrowsToEye;