
import { Icon } from "../../index";

/**
 * A component that renders the `face-clouds` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-clouds?s=regular face-clouds}
 * @preview ![face-clouds](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/face-clouds.svg)
 */
const FaceClouds: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 0c27.9 0 51.7 17.9 60.4 42.8C198.6 36 210.8 32 224 32c35.3 0 64 28.7 64 64s-28.7 64-64 64L64 160C28.7 160 0 131.3 0 96S28.7 32 64 32l8.6 0C83.6 12.9 104.3 0 128 0zM72.1 192l50 0c-6.5 20.2-10 41.7-10 64c0 80.2 45.4 149.9 112 184.6c.1 22.3 7.2 42.9 19.3 59.7C139.4 467.7 64 370.6 64 256c0-22.1 2.8-43.5 8.1-64zM307.4 48.4C296.8 29.8 280.1 15.2 260.1 7c19.2-4.6 39.2-7 59.9-7C461.4 0 576 114.6 576 256c0 14.8-1.3 29.3-3.7 43.5c-12.5-10.8-28.3-17.8-45.7-19.2c.9-8 1.4-16.1 1.4-24.3c0-114.9-93.1-208-208-208c-4.2 0-8.4 .1-12.6 .4zM208.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM336 368c0-44.2 35.8-80 80-80c29.3 0 54.9 15.8 68.9 39.3c8.8-9.4 21.3-15.3 35.1-15.3c26.5 0 48 21.5 48 48c0 2.7-.2 5.4-.7 8l.7 0c39.8 0 72 32.2 72 72s-32.2 72-72 72l-240 0c-39.8 0-72-32.2-72-72s32.2-72 72-72l8 0z" />
    </Icon>
);

export default FaceClouds;