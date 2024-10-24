
import { Icon } from "../../index";

/**
 * A component that renders the `smog` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/smog?s=sharp-solid smog}
 * @preview ![smog](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/smog.svg)
 */
const Smog: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M192 287.1c-5.3 .6-10.6 .9-16 .9L32 288l0-144C32 64.5 96.5 0 176 0c34.5 0 66.1 12.1 90.9 32.3C289.6 12.2 319.4 0 352 0c49.1 0 91.8 27.7 113.2 68.3C475 65.5 485.3 64 496 64c61.9 0 112 50.1 112 112l0 112-112 0-27.3 0c-22.6 19.9-52.2 32-84.7 32s-62.1-12.1-84.7-32L192 288l0-.9zM616 368l24 0 0 48-24 0-336 0-24 0 0-48 24 0 336 0zm-64 96l24 0 0 48-24 0-112 0-24 0 0-48 24 0 112 0zm-192 0l24 0 0 48-24 0L24 512 0 512l0-48 24 0 336 0zM224 368l0 48-24 0L96 416l-24 0 0-48 24 0 104 0 24 0z" />
    </Icon>
);

export default Smog;