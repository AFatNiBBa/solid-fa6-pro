
import { Icon } from "../../index";

/**
 * A component that renders the `snake` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snake?s=sharp-thin snake}
 * @preview ![snake](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/snake.svg)
 */
const Snake: typeof Icon = x => (
    <Icon {...x}>
        <path d="M175.9 512l.1 0 172 0c72.9 0 132-59.1 132-132s-59.1-132-132-132l-176 0c-24.3 0-44-19.7-44-44s19.7-44 44-44l116 0 80 64 144-64 0-96L368 0 288 64 172 64C94.7 64 32 126.7 32 204s62.7 140 140 140l176 0c19.9 0 36 16.1 36 36s-16.1 36-36 36l-91.9 0-.1 0L96 416 17.9 455.1 0 464l17.9 8.9L96 512l79.9 0zM99.8 496l-64-32 64-32L256 432s0 0 0 0c0 0 .1 0 .1 0c0 0 0 0 0 0l91.9 0c28.7 0 52-23.3 52-52s-23.3-52-52-52l-176 0c-68.5 0-124-55.5-124-124s55.5-124 124-124l116 0 5.6 0 4.4-3.5 72.4-57.9L496 74.4l0 75.2L370.4 205.4 298 147.5l-4.4-3.5-5.6 0-116 0c-33.1 0-60 26.9-60 60s26.9 60 60 60l176 0c64.1 0 116 51.9 116 116s-51.9 116-116 116l-172 0s0 0 0 0l-.1 0s0 0 0 0l-76.1 0zM384 80a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-16 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Snake;