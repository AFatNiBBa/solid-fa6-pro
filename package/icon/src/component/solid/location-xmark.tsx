
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `location-xmark` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/location-xmark?s=solid location-xmark}
 * @preview ![location-xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgMEM4Ni4zNzUgMCAwIDg2LjM2OSAwIDE5MS45ODhDMCAyNjguNzM0IDI1LjYyNSAyOTEuMjMyIDE3Mi43NSA1MDIuMzQ0QzE4Mi4zNzUgNTE1LjIxOSAyMDEuNjI1IDUxNS4yMTkgMjExLjI1IDUwMi4zNDRDMzU4LjM3NSAyOTEuMjMyIDM4NCAyNjguNzM0IDM4NCAxOTEuOTg4QzM4NCA4Ni4zNjkgMjk3LjYyNSAwIDE5MiAwWk0yNzIuOTY5IDIzOS4wMjlDMjgyLjM0NCAyNDguNDA0IDI4Mi4zNDQgMjYzLjU5MiAyNzIuOTY5IDI3Mi45NjdDMjYzLjU4OCAyODIuMzQ4IDI0OC40MDQgMjgyLjM0IDIzOS4wMzEgMjcyLjk2N0wxOTIgMjI1LjkzNkwxNDQuOTY5IDI3Mi45NjdDMTM1LjU4OCAyODIuMzQ4IDEyMC40MDQgMjgyLjM0IDExMS4wMzEgMjcyLjk2N0MxMDEuNjU2IDI2My41OTIgMTAxLjY1NiAyNDguNDA0IDExMS4wMzEgMjM5LjAyOUwxNTguMDYyIDE5MS45OThMMTExLjAzMSAxNDQuOTY5QzEwMS42NTYgMTM1LjU5NCAxMDEuNjU2IDEyMC40MDYgMTExLjAzMSAxMTEuMDMxUzEzNS41OTQgMTAxLjY1NiAxNDQuOTY5IDExMS4wMzFMMTkyIDE1OC4wNjJMMjM5LjAzMSAxMTEuMDMxQzI0OC40MDYgMTAxLjY1NiAyNjMuNTk0IDEwMS42NTYgMjcyLjk2OSAxMTEuMDMxUzI4Mi4zNDQgMTM1LjU5NCAyNzIuOTY5IDE0NC45NjlMMjI1LjkzOCAxOTEuOTk4TDI3Mi45NjkgMjM5LjAyOVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function LocationXmark(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M192 0C86.375 0 0 86.369 0 191.988C0 268.734 25.625 291.232 172.75 502.344C182.375 515.219 201.625 515.219 211.25 502.344C358.375 291.232 384 268.734 384 191.988C384 86.369 297.625 0 192 0ZM272.969 239.029C282.344 248.404 282.344 263.592 272.969 272.967C263.588 282.348 248.404 282.34 239.031 272.967L192 225.936L144.969 272.967C135.588 282.348 120.404 282.34 111.031 272.967C101.656 263.592 101.656 248.404 111.031 239.029L158.062 191.998L111.031 144.969C101.656 135.594 101.656 120.406 111.031 111.031S135.594 101.656 144.969 111.031L192 158.062L239.031 111.031C248.406 101.656 263.594 101.656 272.969 111.031S282.344 135.594 272.969 144.969L225.938 191.998L272.969 239.029Z" />
        </Icon>
    </>
}