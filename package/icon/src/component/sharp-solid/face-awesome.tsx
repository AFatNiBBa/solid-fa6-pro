
import { Icon } from "../../index";

/**
 * A component that renders the `face-awesome` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-awesome?s=sharp-solid face-awesome}
 * @preview ![face-awesome](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/face-awesome.svg)
 */
const FaceAwesome: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm203.5-95.6c-5.6 9.4-15.8 15.6-27.5 15.6c-17.7 0-32-14.3-32-32c0-9.1 3.8-17.4 10-23.2c-3.3-.5-6.6-.8-10-.8c-35.3 0-64 28.7-64 64l0 40 128 0 0-40c0-8.3-1.6-16.3-4.5-23.6zM384 176c-17.7 0-32-14.3-32-32c0-8.5 3.3-16.3 8.8-22c-5.4-1.3-11-2-16.8-2c-39.8 0-72 32.2-72 72l0 32 144 0 0-32c0-10.4-2.2-20.2-6.1-29.1c-5.8 8-15.2 13.1-25.9 13.1zm48 112s0 0 0 0l-32.6 0-286.7 0L80 288s0 0 0 0l3.8 18.8c.9 4.5 2 8.9 3.2 13.2c21.1 75.2 89.9 128 169.1 128c55.9 0 106.6-26.3 139-68.3c0 0 0 0 0 0c16.2-20.9 27.8-45.6 33.2-73L432 288zM240.1 415.1c1.7-44 37.8-79.1 82.2-79.1c19.6 0 37.6 6.8 51.7 18.3C347.8 392 304.3 416 256 416c-5.4 0-10.7-.3-15.9-.9z" />
    </Icon>
);

export default FaceAwesome;