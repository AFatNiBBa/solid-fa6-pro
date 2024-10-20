
import { Icon } from "../../index";

/**
 * A component that renders the `face-awesome` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-awesome?s=sharp-regular face-awesome}
 * @preview ![face-awesome](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/face-awesome.svg)
 */
const FaceAwesome: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm192-32l0-24c0-2-.1-3.9-.4-5.8c-4.2 3.6-9.6 5.8-15.6 5.8c-13.3 0-24-10.7-24-24c0-6 2.2-11.4 5.8-15.6c-1.9-.3-3.8-.4-5.8-.4c-22.1 0-40 17.9-40 40l0 24 80 0zm-40-96c39.8 0 72 32.2 72 72l0 24 0 32-32 0-80 0-32 0 0-32 0-24c0-39.8 32.2-72 72-72zm216 72c-13.3 0-24-10.7-24-24c0-5.4 1.8-10.3 4.7-14.3c-4.1-1.1-8.3-1.7-12.7-1.7c-26.5 0-48 21.5-48 48l0 16 96 0 0-16c0-4.4-.6-8.7-1.7-12.7c-4 3-8.9 4.7-14.3 4.7zm-32-72c44.2 0 80 35.8 80 80l0 16 0 32-32 0-96 0-32 0 0-32 0-16c0-44.2 35.8-80 80-80zM100.2 307L96 288l20.3 0 12.5 0 254.4 0 12.5 0 20.3 0-4.2 19-.1 .4-.1 .3c-3.9 17.4-10.6 33.6-19.5 48.2l-.1-.1c-28.2 45.9-78.6 75.7-134.9 76.1l-1.1 0c-29.6 0-57.6-8.1-81.7-22.5c-36.6-21.8-64.1-57.9-73.9-101.6l-.2-.9zm263.9 33.1c-8.1-2.7-16.8-4.1-25.8-4.1c-39.2 0-71.9 27.3-80.2 64c44.1-.7 83.6-24 106.1-59.8z" />
    </Icon>
);

export default FaceAwesome;