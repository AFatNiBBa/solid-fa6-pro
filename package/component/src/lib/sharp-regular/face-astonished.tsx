
import { Icon } from "../../index";

/**
 * A component that renders the `face-astonished` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-astonished?s=sharp-regular face-astonished}
 * @preview ![face-astonished](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/face-astonished.svg)
 */
const FaceAstonished: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 48c26.5 0 48 21.5 48 48l0 32c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-32c0-26.5 21.5-48 48-48zM144.4 224a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM192 144c-4.4 0-8.8 .3-13 .9c-21.2 2.8-40.6 12.4-56.1 26.8l-11.7 10.9L89.4 159.2l11.7-10.9c20.1-18.7 45.5-31.5 73.7-35.2c5.6-.7 11.4-1.1 17.2-1.1l16 0 0 32-16 0zm141 .9c-4.3-.6-8.6-.9-13-.9l-16 0 0-32 16 0c5.8 0 11.6 .4 17.2 1.1c28.2 3.7 53.7 16.4 73.7 35.2l11.7 10.9-21.8 23.4-11.7-10.9c-15.5-14.5-34.8-24-56.1-26.8z" />
    </Icon>
);

export default FaceAstonished;