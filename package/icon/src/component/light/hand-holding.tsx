
import { Icon } from "../../index";

/**
 * A component that renders the `hand-holding` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-holding?s=light hand-holding}
 * @preview ![hand-holding](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/hand-holding.svg)
 */
const HandHolding: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M195.4 304c-15.8 0-31.2 4.7-44.4 13.4L75.2 368 16 368c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0c3.2 0 6.2-.9 8.9-2.7l79.9-53.3c7.9-5.3 17.1-8.1 26.6-8.1L344 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-24 0-64 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0 24 0 60.6 0c2.9 0 5.7-.8 8.2-2.3L511.3 355c3.4-2 7.2-3 11.1-3l1.3 0c11.2 0 20.3 9.1 20.3 20.3c0 6.9-3.5 13.3-9.2 17L415.1 467.1c-13 8.4-28.1 12.9-43.6 12.9L16 480c-8.8 0-16 7.2-16 16s7.2 16 16 16l355.5 0c21.7 0 42.9-6.3 61-18.1l119.6-77.8C567 406.5 576 390 576 372.3c0-28.9-23.4-52.3-52.3-52.3l-1.3 0c-9.7 0-19.1 2.6-27.5 7.6L400.2 384l-5.6 0c3.5-7.3 5.4-15.4 5.4-24c0-30.9-25.1-56-56-56l-148.6 0z" />
    </Icon>
);

export default HandHolding;