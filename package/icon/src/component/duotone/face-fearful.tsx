
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-fearful` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-fearful?s=duotone face-fearful}
 * @preview ![face-fearful](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/face-fearful.svg)
 */
const FaceFearful: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM84.3 138.9c-6-6.5-5.7-16.6 .8-22.6c20.1-18.7 45.5-31.5 73.7-35.2c5.6-.7 11.4-1.1 17.2-1.1c8.8 0 16 7.2 16 16s-7.2 16-16 16c-4.4 0-8.8 .3-13 .9c-21.2 2.8-40.6 12.4-56.1 26.8c-6.5 6-16.6 5.7-22.6-.8zM224 224A64 64 0 1 1 96 224a64 64 0 1 1 128 0zM176 400c0-44.2 35.8-80 80-80s80 35.8 80 80c0 8.8-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16zM416 224a64 64 0 1 1 -128 0 64 64 0 1 1 128 0zM320 96c0-8.8 7.2-16 16-16c5.8 0 11.6 .4 17.2 1.1c28.2 3.7 53.7 16.4 73.7 35.2c3.4 3.2 5.1 7.4 5.1 11.7c0 3.9-1.4 7.8-4.3 10.9c-6 6.5-16.2 6.8-22.6 .8c-15.5-14.5-34.8-24-56.1-26.8c-4.3-.6-8.6-.9-13-.9c-8.8 0-16-7.2-16-16z" />
        <path d="M176 112c-4.4 0-8.8 .3-13 .9c-21.2 2.8-40.6 12.4-56.1 26.8c-6.5 6-16.6 5.7-22.6-.8s-5.7-16.6 .8-22.6c20.1-18.7 45.5-31.5 73.7-35.2c5.6-.7 11.4-1.1 17.2-1.1c8.8 0 16 7.2 16 16s-7.2 16-16 16zm-15.6 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm192 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM349 112.9c-4.3-.6-8.6-.9-13-.9c-8.8 0-16-7.2-16-16s7.2-16 16-16c5.8 0 11.6 .4 17.2 1.1c28.2 3.7 53.7 16.4 73.7 35.2c6.5 6 6.8 16.2 .8 22.6s-16.2 6.8-22.6 .8c-15.5-14.5-34.8-24-56.1-26.8z" />
    </Icon>
);

export default FaceFearful;