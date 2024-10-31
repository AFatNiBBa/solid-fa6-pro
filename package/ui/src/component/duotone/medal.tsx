
import { Icon, generic } from "../../index";

/**
 * A component that renders the `medal` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/medal?s=duotone medal}
 * @preview ![medal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/medal.svg)
 */
const Medal: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 24.6c0 4.8 1.4 9.6 4.1 13.6L124.6 218.9c30.5-34.2 74.2-56.4 123-58.7l.4-.2L161.3 15.5C155.5 5.9 145.1 0 133.9 0L24.6 0C11 0 0 11 0 24.6zM264 160l.4 .2c48.9 2.3 92.5 24.5 123 58.7L507.9 38.2c2.7-4 4.1-8.8 4.1-13.6C512 11 501 0 487.4 0L378.1 0c-11.2 0-21.7 5.9-27.4 15.5L264 160z" />
        <path d="M256 512a176 176 0 1 0 0-352 176 176 0 1 0 0 352zm30.8-225.5c1.4 2.8 4 4.7 7 5.1l50.1 7.3c7.7 1.1 10.7 10.5 5.2 16l-36.3 35.4c-2.2 2.2-3.2 5.2-2.7 8.3l8.6 49.9c1.3 7.6-6.7 13.5-13.6 9.9l-44.8-23.6c-2.7-1.4-6-1.4-8.7 0l-44.8 23.6c-6.9 3.6-14.9-2.2-13.6-9.9l8.6-49.9c.5-3-.5-6.1-2.7-8.3l-36.3-35.4c-5.6-5.4-2.5-14.8 5.2-16l50.1-7.3c3-.4 5.7-2.4 7-5.1l22.4-45.4c3.4-7 13.3-7 16.8 0l22.4 45.4z" />
    </Icon>
);

export default Medal;