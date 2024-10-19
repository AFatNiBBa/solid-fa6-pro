
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `user-check` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-check?s=thin user-check}
 * @preview ![user-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMjU2QzI5NC42OTUgMjU2IDM1MiAxOTguNjkxIDM1MiAxMjhTMjk0LjY5NSAwIDIyNCAwQzE1My4zMTIgMCA5NiA1Ny4zMDkgOTYgMTI4UzE1My4zMTIgMjU2IDIyNCAyNTZaTTIyNCAxNkMyODUuNzU4IDE2IDMzNiA2Ni4yNDIgMzM2IDEyOFMyODUuNzU4IDI0MCAyMjQgMjQwUzExMiAxODkuNzU4IDExMiAxMjhTMTYyLjI0MiAxNiAyMjQgMTZaTTI3Mi44NDQgMzA0SDE3NS4xNTZDNzguNTYyIDMwNCAwIDM3OS4zNzUgMCA0NzJDMCA0OTQuMDYyIDE4LjU5NCA1MTIgNDEuNDM4IDUxMkg0MDYuNTYyQzQyOS40MDYgNTEyIDQ0OCA0OTQuMDYyIDQ0OCA0NzJDNDQ4IDM3OS4zNzUgMzY5LjQzOCAzMDQgMjcyLjg0NCAzMDRaTTQwNi41NjIgNDk2SDQxLjQzOEMyNy40MDYgNDk2IDE2IDQ4NS4yMTkgMTYgNDcyQzE2IDM4OC4xODggODcuNDA2IDMyMCAxNzUuMTU2IDMyMEgyNzIuODQ0QzM2MC41OTQgMzIwIDQzMiAzODguMTg4IDQzMiA0NzJDNDMyIDQ4NS4yMTkgNDIwLjU5NCA0OTYgNDA2LjU2MiA0OTZaTTYzNy42NTYgMTQ2LjM0NEM2MzQuNTMxIDE0My4yMTkgNjI5LjQ2OSAxNDMuMjE5IDYyNi4zNDQgMTQ2LjM0NEw1MDQgMjY4LjY4OEw0NDUuNjU2IDIxMC4zNDRDNDQyLjUzMSAyMDcuMjE5IDQzNy40NjkgMjA3LjIxOSA0MzQuMzQ0IDIxMC4zNDRTNDMxLjIxOSAyMTguNTMxIDQzNC4zNDQgMjIxLjY1Nkw0OTguMzQ0IDI4NS42NTZDNDk5LjkwNiAyODcuMjE5IDUwMS45MzggMjg4IDUwNCAyODhTNTA4LjA5NCAyODcuMjE5IDUwOS42NTYgMjg1LjY1Nkw2MzcuNjU2IDE1Ny42NTZDNjQwLjc4MSAxNTQuNTMxIDY0MC43ODEgMTQ5LjQ2OSA2MzcuNjU2IDE0Ni4zNDRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function UserCheck(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M224 256C294.695 256 352 198.691 352 128S294.695 0 224 0C153.312 0 96 57.309 96 128S153.312 256 224 256ZM224 16C285.758 16 336 66.242 336 128S285.758 240 224 240S112 189.758 112 128S162.242 16 224 16ZM272.844 304H175.156C78.562 304 0 379.375 0 472C0 494.062 18.594 512 41.438 512H406.562C429.406 512 448 494.062 448 472C448 379.375 369.438 304 272.844 304ZM406.562 496H41.438C27.406 496 16 485.219 16 472C16 388.188 87.406 320 175.156 320H272.844C360.594 320 432 388.188 432 472C432 485.219 420.594 496 406.562 496ZM637.656 146.344C634.531 143.219 629.469 143.219 626.344 146.344L504 268.688L445.656 210.344C442.531 207.219 437.469 207.219 434.344 210.344S431.219 218.531 434.344 221.656L498.344 285.656C499.906 287.219 501.938 288 504 288S508.094 287.219 509.656 285.656L637.656 157.656C640.781 154.531 640.781 149.469 637.656 146.344Z" />
        </Icon>
    </>
}