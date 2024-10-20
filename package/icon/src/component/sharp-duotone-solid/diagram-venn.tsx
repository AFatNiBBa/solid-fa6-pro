
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diagram-venn` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-venn?s=sharp-duotone-solid diagram-venn}
 * @preview ![diagram-venn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/diagram-venn.svg)
 */
const DiagramVenn: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M192 256c0 61 24.4 116.4 64 156.8c23.6-4.8 45.4-14.8 64-28.8c-12.1-9.1-22.9-19.9-32-32c-7.4-9.8-13.7-20.6-18.7-32c-6.5-14.9-10.8-31.1-12.5-48c-.5-5.3-.8-10.6-.8-16s.3-10.7 .8-16c1.7-16.9 6-33.1 12.5-48c5-11.4 11.3-22.2 18.7-32c9.1-12.1 19.9-22.9 32-32c-18.5-14-40.3-24-63.9-28.8C216.4 139.6 192 195 192 256zM320 53.6c12.2 5.8 23.8 12.7 34.6 20.5c.5 .3 1 .7 1.5 1.1c9.9 7.3 19.3 15.4 27.9 24.1c39.6 40.4 64 95.7 64 156.8c0 1.9 0 3.8-.1 5.7s-.1 3.8-.2 5.7c-.2 3.8-.5 7.5-.8 11.2c-.7 7.4-1.9 14.8-3.3 22c-2.9 14.4-7.2 28.3-12.7 41.6c-11.1 26.5-27.1 50.5-46.9 70.7c-9 9.2-18.8 17.6-29.3 25.2c-10.9 7.8-22.4 14.7-34.6 20.5c29.2 13.8 61.7 21.6 96 21.6c123.7 0 224-100.3 224-224S539.7 32 416 32c-34.4 0-66.9 7.7-96 21.6z" />
        <path d="M352 352l-64 0c-7.4-9.8-13.7-20.6-18.7-32l101.4 0c6.5-14.9 10.8-31.1 12.5-48l-126.4 0c-.5-5.3-.8-10.6-.8-16s.3-10.7 .8-16l126.4 0c-1.7-16.9-6-33.1-12.5-48l-101.4 0c5-11.4 11.3-22.2 18.7-32l64 0c-29.2-38.9-75.7-64-128-64C135.6 96 64 167.6 64 256s71.6 160 160 160c52.3 0 98.8-25.1 128-64zM0 256a224 224 0 1 1 448 0A224 224 0 1 1 0 256z" />
    </Icon>
);

export default DiagramVenn;