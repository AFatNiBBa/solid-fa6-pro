
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lemon` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lemon?s=duotone lemon}
 * @preview ![lemon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/lemon.svg)
 */
const Lemon: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 416c0 35.3 28.7 64 64 64c6.6 0 13-1 19.1-2.9c22.5-7 48.1-14.9 71-9c75.2 19.1 156.4-11 213.7-68.3s87.5-138.5 68.3-213.7c-5.8-22.9 2-48.4 9-71c1.9-6 2.9-12.4 2.9-19.1c0-35.3-28.7-64-64-64c-6.6 0-13 1-19 2.9c-22.5 7-48.1 14.9-71 9c-75.2-19.1-156.4 11-213.7 68.3S-7.2 250.8 11.9 326c5.8 22.9-2 48.4-9 71C1 403 0 409.4 0 416zM64.2 237.8c.1-.7 .3-1.5 .5-2.3c19.1-65.1 73.7-119.8 138.9-138.9c8.5-2.5 17.4 2.4 19.9 10.9s-2.4 17.4-10.9 19.9c-54.6 16-101.1 62.5-117.1 117.1C92.9 253 84 257.8 75.5 255.4c-3.5-1-6.4-3.1-8.4-5.8c-1-1.4-1.8-2.9-2.3-4.5c-.3-.8-.5-1.6-.6-2.5c-.1-.6-.2-1.3-.2-1.3L64 240c0-.7 0-.9 0-1.1c0-.4 .1-.7 .1-1.1z" />
        <path d="M223.4 107.5c2.5 8.5-2.4 17.4-10.9 19.9c-54.6 16-101.1 62.5-117.1 117.1C92.9 253 84 257.8 75.5 255.4S62.2 244 64.6 235.5c19.1-65.1 73.7-119.8 138.9-138.9c8.5-2.5 17.4 2.4 19.9 10.9z" />
    </Icon>
);

export default Lemon;