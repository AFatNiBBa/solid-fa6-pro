
import { Icon, generic } from "../../index";

/**
 * A component that renders the `vacuum` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vacuum?s=sharp-duotone-solid vacuum}
 * @preview ![vacuum](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/vacuum.svg)
 */
const Vacuum: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M352 128l0 197.5c10-3.5 20.8-5.5 32-5.5c53 0 96 43 96 96s-43 96-96 96l224 0 0-192c0-54.8-23-104.2-59.8-139.2C513.8 148.1 467.2 128 416 128l-64 0z" />
        <path d="M249.9 64L512 64c35.3 0 64 28.7 64 64c0 21.9-11 41.2-27.8 52.8c15.5 14.7 28.6 32 38.5 51.2C619 208.7 640 170.8 640 128C640 57.3 582.7 0 512 0L224 0 198.1 0l-5.4 25.3L150.1 224l65.5 0L249.9 64zM208.7 256l-65.5 0L109 416l-61 0L0 464l0 48 127.4 0c.4 0 .9 0 1.3 0l95.3 0 0-96-49.6 0 34.3-160zM384 512a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm0-128a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Vacuum;