
import { Icon, generic } from "../../index";

/**
 * A component that renders the `vacuum` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vacuum?s=duotone vacuum}
 * @preview ![vacuum](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/vacuum.svg)
 */
const Vacuum: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M352 192l0 133.5c10-3.5 20.8-5.5 32-5.5c53 0 96 43 96 96s-43 96-96 96l160 0c35.3 0 64-28.7 64-64l0-128c0-31.7-7.7-61.7-21.3-88c-9.9-19.2-23-36.5-38.5-51.2C513.8 148.1 467.2 128 416 128c-35.3 0-64 28.7-64 64z" />
        <path d="M301.6 64L512 64c35.3 0 64 28.7 64 64c0 21.9-11 41.2-27.8 52.8c15.5 14.7 28.6 32 38.5 51.2C619 208.7 640 170.8 640 128C640 57.3 582.7 0 512 0L301.6 0C241.3 0 189.1 42.2 176.4 101.2L150.1 224l65.5 0L239 114.6C245.4 85.1 271.4 64 301.6 64zM208.7 256l-65.5 0L109 416l-25.2 0c-33.8 0-64.7 18.9-80 49C1.4 469.5 0 474.6 0 480c0 17.7 14.3 32 32 32l95.4 0c.4 0 .9 0 1.3 0l47.3 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-1.6 0 34.3-160zM384 512a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm0-128a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Vacuum;