
import { Icon } from "../../index";

/**
 * A component that renders the `jug` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jug?s=light jug}
 * @preview ![jug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/jug.svg)
 */
const Jug: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M176 85l0-53 96 0 0 53c0 14.2 4.7 28.1 13.5 39.3L363.8 225c13.1 16.9 20.2 37.6 20.2 58.9l0 4.1L64 288l0-4.1c0-21.3 7.1-42.1 20.2-58.9l78.3-100.7C171.3 113.1 176 99.3 176 85zM128 16c0 8.8 7.2 16 16 16l0 53c0 7.1-2.4 14-6.7 19.6L59 205.3c-17.5 22.5-27 50.1-27 78.6L32 304l0 96 0 48c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-48 0-96 0-20.1c0-21.8-5.6-43.1-16-61.9c27.6-7.1 48-32.2 48-62c0-35.3-28.7-64-64-64c-23.6 0-44.2 12.8-55.3 31.8l-18-23.1C306.4 99 304 92.1 304 85l0-53c8.8 0 16-7.2 16-16s-7.2-16-16-16L272 0 176 0 144 0c-8.8 0-16 7.2-16 16zM378.3 191.5l-26.2-33.7c1.1-16.7 15-29.8 31.9-29.8c17.7 0 32 14.3 32 32s-14.3 32-32 32c-2 0-3.9-.2-5.7-.5zM64 384l0-64 320 0 0 64L64 384zm0 32l320 0 0 32c0 17.7-14.3 32-32 32L96 480c-17.7 0-32-14.3-32-32l0-32z" />
    </Icon>
);

export default Jug;