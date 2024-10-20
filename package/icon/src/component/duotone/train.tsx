
import { Icon, generic } from "../../index";

/**
 * A component that renders the `train` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/train?s=duotone train}
 * @preview ![train](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/train.svg)
 */
const Train: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M35.1 492.9C28.1 499.9 33.1 512 43 512l39.7 0c8.5 0 16.6-3.4 22.6-9.4L160 448c-21.3 0-42.7 0-64 0c-2.6 0-5.1-.1-7.5-.3s-4.9-.5-7.3-.9l-46 46zm29-400.2c-.1 .5-.1 1.1-.1 1.6s0 1.1 0 1.6c0 32 0 64 0 96c0 .6 0 1.1 0 1.7s.1 1.1 .1 1.6c.1 1.1 .3 2.1 .5 3.2c.4 2.1 1.1 4.1 1.9 6c1.6 3.8 4 7.3 6.9 10.2c5.8 5.8 13.8 9.4 22.6 9.4l256 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32L96 64c-8.8 0-16.8 3.6-22.6 9.4c-2.9 2.9-5.2 6.3-6.9 10.2c-.8 1.9-1.4 3.9-1.9 6c-.2 1-.4 2.1-.5 3.2zM288 448l54.6 54.6c6 6 14.1 9.4 22.6 9.4l39.7 0c6.8 0 11.2-5.5 11.2-11.3c0-2.8-1-5.6-3.3-7.8l-46-46c-4.8 .8-9.8 1.1-14.9 1.1c-21.3 0-42.7 0-64 0z" />
        <path d="M0 96C0 43 43 0 96 0L352 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96L96 448c-53 0-96-43-96-96L0 96zm64 0l0 96c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32L96 64C78.3 64 64 78.3 64 96zM224 384a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default Train;