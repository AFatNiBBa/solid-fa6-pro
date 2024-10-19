
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `films` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/films?s=light films}
 * @preview ![films](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjQgNDQ4SDk2QzYwLjY1NCA0NDggMzIgNDE5LjM0NiAzMiAzODRWMTEyQzMyIDEwMy4xNjQgMjQuODM2IDk2IDE2IDk2UzAgMTAzLjE2NCAwIDExMlYzODRDMCA0MzcuMDIgNDIuOTggNDgwIDk2IDQ4MEg0NjRDNDcyLjgzNiA0ODAgNDgwIDQ3Mi44MzYgNDgwIDQ2NFM0NzIuODM2IDQ0OCA0NjQgNDQ4Wk01MTIgMzJIMTYwQzEyNC42NTQgMzIgOTYgNjAuNjU0IDk2IDk2VjMyMEM5NiAzNTUuMzQ2IDEyNC42NTQgMzg0IDE2MCAzODRINTEyQzU0Ny4zNDggMzg0IDU3NiAzNTUuMzQ2IDU3NiAzMjBWOTZDNTc2IDYwLjY1NCA1NDcuMzQ4IDMyIDUxMiAzMlpNMTkyIDM1MkgxNjBDMTQyLjM1NSAzNTIgMTI4IDMzNy42NDUgMTI4IDMyMFYyODhIMTkyVjM1MlpNMTkyIDI1NkgxMjhWMTYwSDE5MlYyNTZaTTE5MiAxMjhIMTI4Vjk2QzEyOCA3OC4zNTUgMTQyLjM1NSA2NCAxNjAgNjRIMTkyVjEyOFpNNDQ4IDM1MkgyMjRWMjI0SDQ0OFYzNTJaTTQ0OCAxOTJIMjI0VjY0SDQ0OFYxOTJaTTU0NCAzMjBDNTQ0IDMzNy42NDUgNTI5LjY0NSAzNTIgNTEyIDM1Mkg0ODBWMjg4SDU0NFYzMjBaTTU0NCAyNTZINDgwVjE2MEg1NDRWMjU2Wk01NDQgMTI4SDQ4MFY2NEg1MTJDNTI5LjY0NSA2NCA1NDQgNzguMzU1IDU0NCA5NlYxMjhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Films(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M464 448H96C60.654 448 32 419.346 32 384V112C32 103.164 24.836 96 16 96S0 103.164 0 112V384C0 437.02 42.98 480 96 480H464C472.836 480 480 472.836 480 464S472.836 448 464 448ZM512 32H160C124.654 32 96 60.654 96 96V320C96 355.346 124.654 384 160 384H512C547.348 384 576 355.346 576 320V96C576 60.654 547.348 32 512 32ZM192 352H160C142.355 352 128 337.645 128 320V288H192V352ZM192 256H128V160H192V256ZM192 128H128V96C128 78.355 142.355 64 160 64H192V128ZM448 352H224V224H448V352ZM448 192H224V64H448V192ZM544 320C544 337.645 529.645 352 512 352H480V288H544V320ZM544 256H480V160H544V256ZM544 128H480V64H512C529.645 64 544 78.355 544 96V128Z" />
        </Icon>
    </>
}