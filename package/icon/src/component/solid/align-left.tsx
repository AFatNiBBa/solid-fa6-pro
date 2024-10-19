
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `align-left` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/align-left?s=solid align-left}
 * @preview ![align-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTYgNDE2SDMyQzE0LjMyNiA0MTYgMCA0MzAuMzI2IDAgNDQ4UzE0LjMyNiA0ODAgMzIgNDgwSDQxNkM0MzMuNjc0IDQ4MCA0NDggNDY1LjY3NCA0NDggNDQ4UzQzMy42NzQgNDE2IDQxNiA0MTZaTTMyIDIyNEg0MTZDNDMzLjY3NCAyMjQgNDQ4IDIwOS42NzQgNDQ4IDE5MlM0MzMuNjc0IDE2MCA0MTYgMTYwSDMyQzE0LjMyNiAxNjAgMCAxNzQuMzI2IDAgMTkyUzE0LjMyNiAyMjQgMzIgMjI0Wk0zMiA5NkgyNTZDMjczLjY3NCA5NiAyODggODEuNjc0IDI4OCA2NFMyNzMuNjc0IDMyIDI1NiAzMkgzMkMxNC4zMjYgMzIgMCA0Ni4zMjYgMCA2NFMxNC4zMjYgOTYgMzIgOTZaTTMyIDM1MkgyNTZDMjczLjY3NCAzNTIgMjg4IDMzNy42NzQgMjg4IDMyMFMyNzMuNjc0IDI4OCAyNTYgMjg4SDMyQzE0LjMyNiAyODggMCAzMDIuMzI2IDAgMzIwUzE0LjMyNiAzNTIgMzIgMzUyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function AlignLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M416 416H32C14.326 416 0 430.326 0 448S14.326 480 32 480H416C433.674 480 448 465.674 448 448S433.674 416 416 416ZM32 224H416C433.674 224 448 209.674 448 192S433.674 160 416 160H32C14.326 160 0 174.326 0 192S14.326 224 32 224ZM32 96H256C273.674 96 288 81.674 288 64S273.674 32 256 32H32C14.326 32 0 46.326 0 64S14.326 96 32 96ZM32 352H256C273.674 352 288 337.674 288 320S273.674 288 256 288H32C14.326 288 0 302.326 0 320S14.326 352 32 352Z" />
        </Icon>
    </>
}