
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-anguished` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-anguished?s=sharp-duotone-solid face-anguished}
 * @preview ![face-anguished](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-anguished.svg)
 */
const FaceAnguished: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM89.4 143.2c3.9-3.6 7.8-7.3 11.7-10.9c20.1-18.7 45.5-31.5 73.7-35.2c5.6-.7 11.4-1.1 17.2-1.1l16 0c0 10.7 0 21.3 0 32l-16 0c-4.4 0-8.8 .3-13 .9c-21.2 2.8-40.6 12.4-56.1 26.8l-11.7 10.9L89.4 143.2zm119 80.8a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM176 400c0-44.2 35.8-80 80-80s80 35.8 80 80l0 16-160 0 0-16zM304 96l16 0c5.8 0 11.6 .4 17.2 1.1c28.2 3.7 53.7 16.4 73.7 35.2l11.7 10.9-21.8 23.4-11.7-10.9c-15.5-14.5-34.8-24-56.1-26.8c-4.3-.6-8.6-.9-13-.9l-16 0c0-10.7 0-21.3 0-32zm64.4 128a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M192 128c-4.4 0-8.8 .3-13 .9c-21.2 2.8-40.6 12.4-56.1 26.8l-11.7 10.9L89.4 143.2l11.7-10.9c20.1-18.7 45.5-31.5 73.7-35.2c5.6-.7 11.4-1.1 17.2-1.1l16 0 0 32-16 0zm-15.6 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm160 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM333 128.9c-4.3-.6-8.6-.9-13-.9l-16 0 0-32 16 0c5.8 0 11.6 .4 17.2 1.1c28.2 3.7 53.7 16.4 73.7 35.2l11.7 10.9-21.8 23.4-11.7-10.9c-15.5-14.5-34.8-24-56.1-26.8z" />
    </Icon>
);

export default FaceAnguished;