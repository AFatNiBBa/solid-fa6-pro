
import { Icon } from "../../index";

/**
 * A component that renders the `ghost` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ghost?s=regular ghost}
 * @preview ![ghost](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/ghost.svg)
 */
const Ghost: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 192l0 223.5c26.3-4.9 54.6 3.7 73.6 25.5l6.4 7.3 3.8-4.3c31.9-36.4 88.5-36.4 120.4 0l3.8 4.3 6.4-7.3c19.1-21.8 47.3-30.4 73.6-25.5L336 192c0-79.5-64.5-144-144-144S48 112.5 48 192zM256 512c-5.1 0-9.9-2.2-13.3-6l-26.6-30.5c-12.7-14.6-35.4-14.6-48.2 0L141.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6L85.5 472.5c-11.6-13.3-32.1-14-44.5-1.5l-2.3 2.3c-4.2 4.2-10 6.6-16 6.6C10.1 480 0 469.9 0 457.4L0 192C0 86 86 0 192 0S384 86 384 192l0 265.4c0 12.5-10.1 22.6-22.6 22.6c-6 0-11.8-2.4-16-6.6l-2.3-2.3c-12.5-12.5-32.9-11.8-44.5 1.5L269.3 506c-3.3 3.8-8.2 6-13.3 6zM96 192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default Ghost;