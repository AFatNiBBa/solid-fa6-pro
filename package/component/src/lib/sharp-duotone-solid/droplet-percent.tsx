
import { Icon, generic } from "../../index";

/**
 * A component that renders the `droplet-percent` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/droplet-percent?s=sharp-duotone-solid droplet-percent}
 * @preview ![droplet-percent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/droplet-percent.svg)
 */
const DropletPercent: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 320C0 426 86 512 192 512s192-86 192-192S192 0 192 0S0 214 0 320zm105.4 64c3.8-3.8 7.5-7.5 11.3-11.3c42.7-42.7 85.3-85.3 128-128L256 233.4 278.6 256c-3.8 3.8-7.5 7.5-11.3 11.3c-42.7 42.7-85.3 85.3-128 128c-3.8 3.8-7.5 7.5-11.3 11.3c-7.5-7.5-15.1-15.1-22.6-22.6zM112 264c0-13.3 10.7-24 24-24c6.6 0 12.6 2.7 17 7c2.2 2.2 3.9 4.8 5.1 7.6c.6 1.4 1.1 2.9 1.4 4.5c.2 1.2 .4 2.4 .4 2.4c.1 1.2 .1 1.2 .1 2.6c0 .7 0 1.5-.1 2.3c-.1 .8-.2 1.6-.4 2.4c-.3 1.6-.8 3.1-1.4 4.5c-1.2 2.9-3 5.5-5.1 7.6c-4.3 4.3-10.3 7-17 7c-13.3 0-24-10.7-24-24zM224 376c0-13.3 10.7-24 24-24c6.6 0 12.6 2.7 17 7c2.2 2.2 3.9 4.8 5.1 7.6c.6 1.4 1.1 2.9 1.4 4.5c.2 .8 .3 1.6 .4 2.4s.1 1.6 .1 2.6c0 .7 0 1.5-.1 2.3c-.1 .8-.2 1.6-.4 2.4c-.3 1.6-.8 3.1-1.4 4.5c-1.2 2.9-3 5.5-5.1 7.6c-4.3 4.3-10.3 7-17 7c-13.3 0-24-10.7-24-24z" />
        <path d="M267.3 267.3L278.6 256 256 233.4l-11.3 11.3-128 128L105.4 384 128 406.6l11.3-11.3 128-128zM160 264a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM272 376a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default DropletPercent;