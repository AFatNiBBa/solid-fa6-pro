
import { Icon } from "../../index";

/**
 * A component that renders the `turntable` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turntable?s=thin turntable}
 * @preview ![turntable](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/turntable.svg)
 */
const Turntable: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 48c26.5 0 48 21.5 48 48l0 320c0 26.5-21.5 48-48 48L64 464c-26.5 0-48-21.5-48-48L16 96c0-26.5 21.5-48 48-48l448 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM224 400a144 144 0 1 1 0-288 144 144 0 1 1 0 288zM64 256a160 160 0 1 0 320 0A160 160 0 1 0 64 256zm144 0a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm48 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM512 104c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 152.4c0 3.7-.9 7.4-2.5 10.7l-22.8 45.5c-13.9-3-28.7 3.6-35.3 17l-16 32c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l16-32c7.9-15.8 1.5-35-14.3-42.9c-.9-.5-1.9-.9-2.8-1.2c.9 .4 1.9 .8 2.8 1.2c2.5 1.2 4.7 2.7 6.7 4.5l22.8-45.5c2.8-5.6 4.2-11.7 4.2-17.9L512 104zM471.2 329.7c7.9 4 11.1 13.6 7.2 21.5l-16 32c-4 7.9-13.6 11.1-21.5 7.2s-11.1-13.6-7.2-21.5l16-32c4-7.9 13.6-11.1 21.5-7.2z" />
    </Icon>
);

export default Turntable;