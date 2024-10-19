
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `ellipsis-stroke-vertical` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis-stroke-vertical?s=light ellipsis-stroke-vertical}
 * @preview ![ellipsis-stroke-vertical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik05NiAzODRDNjAuNjU0IDM4NCAzMiA0MTIuNjU0IDMyIDQ0OFM2MC42NTQgNTEyIDk2IDUxMlMxNjAgNDgzLjM0NiAxNjAgNDQ4UzEzMS4zNDYgMzg0IDk2IDM4NFpNOTYgNDgwQzc4LjM1NSA0ODAgNjQgNDY1LjY0NSA2NCA0NDhTNzguMzU1IDQxNiA5NiA0MTZTMTI4IDQzMC4zNTUgMTI4IDQ0OFMxMTMuNjQ1IDQ4MCA5NiA0ODBaTTk2IDEyOEMxMzEuMzQ2IDEyOCAxNjAgOTkuMzQ2IDE2MCA2NFMxMzEuMzQ2IDAgOTYgMFMzMiAyOC42NTQgMzIgNjRTNjAuNjU0IDEyOCA5NiAxMjhaTTk2IDMyQzExMy42NDUgMzIgMTI4IDQ2LjM1NSAxMjggNjRTMTEzLjY0NSA5NiA5NiA5NlM2NCA4MS42NDUgNjQgNjRTNzguMzU1IDMyIDk2IDMyWk05NiAxOTJDNjAuNjU0IDE5MiAzMiAyMjAuNjU0IDMyIDI1NlM2MC42NTQgMzIwIDk2IDMyMFMxNjAgMjkxLjM0NiAxNjAgMjU2UzEzMS4zNDYgMTkyIDk2IDE5MlpNOTYgMjg4Qzc4LjM1NSAyODggNjQgMjczLjY0NSA2NCAyNTZTNzguMzU1IDIyNCA5NiAyMjRTMTI4IDIzOC4zNTUgMTI4IDI1NlMxMTMuNjQ1IDI4OCA5NiAyODhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function EllipsisStrokeVertical(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 192 512" {...props}>
            <path d="M96 384C60.654 384 32 412.654 32 448S60.654 512 96 512S160 483.346 160 448S131.346 384 96 384ZM96 480C78.355 480 64 465.645 64 448S78.355 416 96 416S128 430.355 128 448S113.645 480 96 480ZM96 128C131.346 128 160 99.346 160 64S131.346 0 96 0S32 28.654 32 64S60.654 128 96 128ZM96 32C113.645 32 128 46.355 128 64S113.645 96 96 96S64 81.645 64 64S78.355 32 96 32ZM96 192C60.654 192 32 220.654 32 256S60.654 320 96 320S160 291.346 160 256S131.346 192 96 192ZM96 288C78.355 288 64 273.645 64 256S78.355 224 96 224S128 238.355 128 256S113.645 288 96 288Z" />
        </Icon>
    </>
}