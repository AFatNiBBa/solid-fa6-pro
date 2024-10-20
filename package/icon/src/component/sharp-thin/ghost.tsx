
import { Icon } from "../../index";

/**
 * A component that renders the `ghost` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ghost?s=sharp-thin ghost}
 * @preview ![ghost](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/ghost.svg)
 */
const Ghost: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M67.9 428.2l8.1 9.3 45.4 51.9L181.4 436l10.6-9.4 10.6 9.4 59.9 53.3L308 437.5l8.1-9.3 11.1 5.5L368 454.1 368 192c0-97.2-78.8-176-176-176S16 94.8 16 192l0 262.1 40.8-20.4 11.1-5.5zM16 472L0 480l0-17.9L0 192C0 86 86 0 192 0S384 86 384 192l0 270.1 0 17.9-16-8-48-24-45.5 52L264 512l-12-10.6L192 448l-60 53.4L120 512l-10.5-12L64 448 16 472zM128 168a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm40 24a40 40 0 1 1 -80 0 40 40 0 1 1 80 0zm64 0a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm24 40a40 40 0 1 1 0-80 40 40 0 1 1 0 80z" />
    </Icon>
);

export default Ghost;