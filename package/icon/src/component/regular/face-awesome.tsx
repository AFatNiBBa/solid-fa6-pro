
import { Icon } from "../../index";

/**
 * A component that renders the `face-awesome` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-awesome?s=regular face-awesome}
 * @preview ![face-awesome](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/face-awesome.svg)
 */
const FaceAwesome: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm192-32l0-24c0-2-.1-3.9-.4-5.8c-4.2 3.6-9.6 5.8-15.6 5.8c-13.3 0-24-10.7-24-24c0-6 2.2-11.4 5.8-15.6c-1.9-.3-3.8-.4-5.8-.4c-22.1 0-40 17.9-40 40l0 24 80 0zm-40-96c39.8 0 72 32.2 72 72l0 24c0 17.7-14.3 32-32 32l-80 0c-17.7 0-32-14.3-32-32l0-24c0-39.8 32.2-72 72-72zm216 72c-13.3 0-24-10.7-24-24c0-5.4 1.8-10.3 4.7-14.3c-4.1-1.1-8.3-1.7-12.7-1.7c-26.5 0-48 21.5-48 48l0 16 96 0 0-16c0-4.4-.6-8.7-1.7-12.7c-4 3-8.9 4.7-14.3 4.7zm-32-72c44.2 0 80 35.8 80 80l0 17.9c0 16.6-13.5 30.1-30.1 30.1l-99.8 0c-16.6 0-30.1-13.5-30.1-30.1l0-17.9c0-44.2 35.8-80 80-80zM100.4 307.8c-2.3-10.2 5.5-19.8 15.9-19.8c0 0 0 0 0 0l279.4 0s0 0 0 0c10.4 0 18.1 9.6 15.9 19.8c-3.9 17.4-10.6 33.6-19.5 48.2c0 0 0 0 0 0c-28.2 45.9-78.9 75.6-134.9 76l-1.1 0c-4.6 0-9.3-.2-13.8-.6c-68.5-5.9-126.7-55.6-141.8-123.6zm263.8 32.4c-8.2-2.7-16.9-4.2-25.9-4.2c-39.2 0-71.9 27.3-80.2 64c44.1-.7 83.8-24.1 106.2-59.8z" />
    </Icon>
);

export default FaceAwesome;