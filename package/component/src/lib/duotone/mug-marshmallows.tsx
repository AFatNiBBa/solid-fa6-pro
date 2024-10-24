
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mug-marshmallows` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mug-marshmallows?s=duotone mug-marshmallows}
 * @preview ![mug-marshmallows](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/mug-marshmallows.svg)
 */
const MugMarshmallows: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 64c0-17.7 14.3-32 32-32l128 0c7.5 0 14.4 2.6 19.8 6.9L175 75.7c-9.6 9.6-15 22.7-15 36.3c0 5.5 .9 10.9 2.6 16L32 128l0-64zm64 96l64 0 0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64zm96-48c0-5.1 2-10 5.7-13.7l60.7-60.7C262 34 266.9 32 272 32s10 2 13.7 5.7l60.7 60.7c3.6 3.6 5.7 8.5 5.7 13.7s-2 10-5.7 13.7L344 128l-144 0-2.3-2.3C194 122 192 117.1 192 112z" />
        <path d="M96 160l-64 0c-17.7 0-32 14.3-32 32L0 384c0 53 43 96 96 96l192 0c53 0 96-43 96-96l16 0c61.9 0 112-50.1 112-112s-50.1-112-112-112l-48 0-192 0 0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64zM384 320l0-96 16 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-16 0z" />
    </Icon>
);

export default MugMarshmallows;