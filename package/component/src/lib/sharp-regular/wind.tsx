
import { Icon } from "../../index";

/**
 * A component that renders the `wind` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wind?s=sharp-regular wind}
 * @preview ![wind](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/wind.svg)
 */
const Wind: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 0l0 48 24 0 44 0c24.3 0 44 19.7 44 44s-19.7 44-44 44L24 136 0 136l0 48 24 0 332 0c50.8 0 92-41.2 92-92s-41.2-92-92-92L312 0 288 0zm64 416l24 0 44 0c50.8 0 92-41.2 92-92s-41.2-92-92-92L24 232 0 232l0 48 24 0 396 0c24.3 0 44 19.7 44 44s-19.7 44-44 44l-44 0-24 0 0 48zM120 512l44 0c50.8 0 92-41.2 92-92s-41.2-92-92-92L24 328 0 328l0 48 24 0 140 0c24.3 0 44 19.7 44 44s-19.7 44-44 44l-44 0-24 0 0 48 24 0z" />
    </Icon>
);

export default Wind;