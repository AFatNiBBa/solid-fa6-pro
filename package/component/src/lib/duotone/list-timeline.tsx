
import { Icon, generic } from "../../index";

/**
 * A component that renders the `list-timeline` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-timeline?s=duotone list-timeline}
 * @preview ![list-timeline](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/list-timeline.svg)
 */
const ListTimeline: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M146.7 96c0 4.8 2.1 9.6 6.4 12.8l38.4 28.8c5.5 4.2 12.3 6.4 19.2 6.4L424 144c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L210.7 48c-6.9 0-13.7 2.2-19.2 6.4L153.1 83.2c-4.3 3.2-6.4 8-6.4 12.8zm0 160c0 4.8 2.1 9.6 6.4 12.8l38.4 28.8c5.5 4.2 12.3 6.4 19.2 6.4L488 304c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-277.3 0c-6.9 0-13.7 2.2-19.2 6.4l-38.4 28.8c-4.3 3.2-6.4 8-6.4 12.8zm0 160c0 4.8 2.1 9.6 6.4 12.8l38.4 28.8c5.5 4.2 12.3 6.4 19.2 6.4L424 464c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-213.3 0c-6.9 0-13.7 2.2-19.2 6.4l-38.4 28.8c-4.3 3.2-6.4 8-6.4 12.8z" />
        <path d="M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48 112a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 160a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
    </Icon>
);

export default ListTimeline;