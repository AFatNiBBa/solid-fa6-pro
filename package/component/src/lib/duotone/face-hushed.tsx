
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-hushed` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-hushed?s=duotone face-hushed}
 * @preview ![face-hushed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/face-hushed.svg)
 */
const FaceHushed: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm100.3-69.1c-6-6.5-5.7-16.6 .8-22.6c20.1-18.7 45.5-31.5 73.7-35.2c5.6-.7 11.4-1.1 17.2-1.1c8.8 0 16 7.2 16 16s-7.2 16-16 16c-4.4 0-8.8 .3-13 .9c-21.2 2.8-40.6 12.4-56.1 26.8c-6.5 6-16.6 5.7-22.6-.8zM208.4 256a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM304 384a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm0-240c0-8.8 7.2-16 16-16c5.8 0 11.6 .4 17.2 1.1c28.2 3.7 53.7 16.4 73.7 35.2c6.5 6 6.8 16.2 .8 22.6s-16.2 6.8-22.6 .8c-15.5-14.5-34.8-24-56.1-26.8c-4.3-.6-8.6-.9-13-.9c-8.8 0-16-7.2-16-16zm64.4 112a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M192 160c-4.4 0-8.8 .3-13 .9c-21.2 2.8-40.6 12.4-56.1 26.8c-6.5 6-16.6 5.7-22.6-.8s-5.7-16.6 .8-22.6c20.1-18.7 45.5-31.5 73.7-35.2c5.6-.7 11.4-1.1 17.2-1.1c8.8 0 16 7.2 16 16s-7.2 16-16 16zm-15.6 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm160 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM333 160.9c-4.3-.6-8.6-.9-13-.9c-8.8 0-16-7.2-16-16s7.2-16 16-16c5.8 0 11.6 .4 17.2 1.1c28.2 3.7 53.7 16.4 73.7 35.2c6.5 6 6.8 16.2 .8 22.6s-16.2 6.8-22.6 .8c-15.5-14.5-34.8-24-56.1-26.8z" />
    </Icon>
);

export default FaceHushed;