
import { Icon } from "../../index";

/**
 * A component that renders the `turntable` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turntable?s=regular turntable}
 * @preview ![turntable](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/turntable.svg)
 */
const Turntable: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l448 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM224 400a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm0-176a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm272-88c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 135.7c0 6.7-1.7 13.3-4.9 19.2l-40.2 73.7c-6.3 11.6-2.1 26.2 9.6 32.6s26.2 2.1 32.6-9.6l40.2-73.7c7-12.9 10.7-27.4 10.7-42.1L496 136z" />
    </Icon>
);

export default Turntable;