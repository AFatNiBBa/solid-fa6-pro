
import { Icon, generic } from "../../index";

/**
 * A component that renders the `whiskey-glass` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/whiskey-glass?s=duotone whiskey-glass}
 * @preview ![whiskey-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/whiskey-glass.svg)
 */
const WhiskeyGlass: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M.3 68.6l50 342.9c5.7 39.3 39.4 68.5 79.2 68.5l253 0c39.7 0 73.4-29.1 79.2-68.5l50-342.9c1.3-9.2-1.4-18.5-7.5-25.5S489.3 32 480 32L32 32c-9.3 0-18.1 4-24.2 11.1S-1 59.4 .3 68.6zM69 96l374 0c-6.2 42.7-12.4 85.3-18.7 128l-26 178.3c-1.1 7.9-7.9 13.7-15.8 13.7l-253 0c-7.9 0-14.7-5.8-15.8-13.7L87.7 224C81.5 181.3 75.2 138.7 69 96z" />
        <path d="M424.3 224L87.7 224l26 178.3c1.1 7.9 7.9 13.7 15.8 13.7l253 0c7.9 0 14.7-5.8 15.8-13.7l26-178.3z" />
    </Icon>
);

export default WhiskeyGlass;