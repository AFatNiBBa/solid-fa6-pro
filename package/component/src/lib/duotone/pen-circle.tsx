
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-circle` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-circle?s=duotone pen-circle}
 * @preview ![pen-circle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/pen-circle.svg)
 */
const PenCircle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM128.5 364l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9L257.1 183.8l71 71L222.9 359.9c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2zM279.8 161.1l21.4-21.4c15.6-15.6 40.9-15.6 56.6 0l14.4 14.4c7.8 7.8 11.7 18 11.7 28.3s-3.9 20.5-11.7 28.3l-21.4 21.4-71-71z" />
        <path d="M301.2 139.7l-21.4 21.4 71 71 21.4-21.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4c-15.6-15.6-40.9-15.6-56.6 0zm-44 44L151.9 289c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L328.1 254.7l-71-71z" />
    </Icon>
);

export default PenCircle;