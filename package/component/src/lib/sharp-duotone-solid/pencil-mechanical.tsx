
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pencil-mechanical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pencil-mechanical?s=sharp-duotone-solid pencil-mechanical}
 * @preview ![pencil-mechanical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pencil-mechanical.svg)
 */
const PencilMechanical: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M368 64L432 0l80 80-64 64c-6-6-12-12-17.9-17.9c-14.7-14.7-29.4-29.4-44.1-44.1C380 76 374 70 368 64z" />
        <path d="M248 14.1l17 17 52 52 1.1-1.1L352 48l33.9 33.9 44.1 44.1L464 160l-33.9 33.9L176 448 64 480s0 0 0 0L32 512 0 480l32-32L64 336 283 117l-35-35L137 193l-17 17L86.1 176l17-17L231 31l17-17zM149.6 405.6l-43.2-43.2L89.1 422.9l60.5-17.3z" />
    </Icon>
);

export default PencilMechanical;