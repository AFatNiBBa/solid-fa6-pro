
import { Icon } from "../../index";

/**
 * A component that renders the `trash-slash` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-slash?s=sharp-thin trash-slash}
 * @preview ![trash-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/trash-slash.svg)
 */
const TrashSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M520 112.8l.1-.8L504 112 485.3 294.8l14.9 11.8L520 112.8zM468 464.6L464.8 496l-289.5 0L146.1 210.4l-17.5-13.8L160 504.8l.7 7.2 7.2 0 304 0 7.2 0 .7-7.2 2.9-28.5L468 464.6zM211.6 64L193 64l20.3 16L544 80l0-16L428.4 64 390.8 3.8 388.4 0 384 0 256 0l-4.4 0-2.4 3.8L211.6 64zm168-48l30 48L230.4 64l30-48 119.1 0zM16.2 5L9.9 0 0 12.5l6.3 5L623.8 507l6.3 5 9.9-12.5-6.3-5L16.2 5z" />
    </Icon>
);

export default TrashSlash;