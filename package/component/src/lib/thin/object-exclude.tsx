
import { Icon } from "../../index";

/**
 * A component that renders the `object-exclude` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-exclude?s=thin object-exclude}
 * @preview ![object-exclude](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/object-exclude.svg)
 */
const ObjectExclude: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 16l224 0c26.5 0 48 21.5 48 48l0 64 16 0 0-64c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64L0 288c0 35.3 28.7 64 64 64l64 0 0-16-64 0c-26.5 0-48-21.5-48-48L16 64c0-26.5 21.5-48 48-48zm96 368l0 64c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64l-64 0 0 16 64 0c26.5 0 48 21.5 48 48l0 224c0 26.5-21.5 48-48 48l-224 0c-26.5 0-48-21.5-48-48l0-64-16 0zm128-32c35.3 0 64-28.7 64-64l-16 0c0 26.5-21.5 48-48 48l-32 0 0 16 32 0zm64-176l0-16-16 0-48 0 0 16 48 0 0 80 16 0 0-80zM224 352l0-16-48 0 0-80-16 0 0 80 0 16 16 0 48 0zM160 224l16 0c0-26.5 21.5-48 48-48l32 0 0-16-32 0c-35.3 0-64 28.7-64 64z" />
    </Icon>
);

export default ObjectExclude;