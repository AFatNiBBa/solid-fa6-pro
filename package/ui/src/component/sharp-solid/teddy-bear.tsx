
import { Icon } from "../../index";

/**
 * A component that renders the `teddy-bear` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/teddy-bear?s=sharp-solid teddy-bear}
 * @preview ![teddy-bear](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/teddy-bear.svg)
 */
const TeddyBear: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M152 102C137.5 91.8 128 75 128 56c0-30.9 25.1-56 56-56c22.3 0 41.6 13.1 50.6 32L288 32l53.4 0c9-18.9 28.3-32 50.6-32c30.9 0 56 25.1 56 56c0 19-9.5 35.8-24 46l0 26c0 70.7-60.9 128-136 128s-136-57.3-136-128l0-26zm88 26a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm112-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm0 64c0-26.5-28.7-48-64-48s-64 21.5-64 48s28.7 48 64 48s64-21.5 64-48zm-32-8c0 13.3-14.3 24-32 24s-32-10.7-32-24s14.3-24 32-24s32 10.7 32 24zM88 148.6l29.7 37.7L143.5 219c73.7 93.5 215.4 93.5 289.1 0l25.8-32.7L488 148.6 563.4 208l-29.7 37.7-25.8 32.7c-17.7 22.4-37.9 41.3-59.9 56.7l0 64.9 40 0 8-48 80 16L552 512l-40 0-32 0L96 512l-32 0-40 0L0 368l80-16 8 48 40 0 0-64.9c-22-15.4-42.3-34.3-59.9-56.7L42.3 245.7 12.6 208 88 148.6zM384 384l-32-32-128 0-32 32 0 32 192 0 0-32z" />
    </Icon>
);

export default TeddyBear;