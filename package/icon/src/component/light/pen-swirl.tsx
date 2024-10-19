
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `pen-swirl` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pen-swirl?s=light pen-swirl}
 * @preview ![pen-swirl](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgNjkuNzg4QzUxMiA1OC41MjcgNTA3LjcwNCA0Ny4yNjcgNDk5LjExMyAzOC42NzZMNDczLjMyNCAxMi44ODdDNDY0LjczMiA0LjI5NSA0NTMuNDczIC0wLjAwMiA0NDIuMjEzIC0wLjAwMkM0MzAuOTUxIC0wLjAwMiA0MTkuNjkxIDQuMjk1IDQxMS4xIDEyLjg4N0wyMTUuNjkxIDIwOC4zMDdDMjEyLjYxOSAyMTEuMzc5IDIxMC41MjcgMjE1LjI5MSAyMDkuNjc2IDIxOS41NDlMMTkyLjIxOSAzMDYuODM2QzE5Mi4wNyAzMDcuNTc5IDE5MS45OTkgMzA4LjMxNCAxOTEuOTk5IDMwOS4wMzRDMTkxLjk5OSAzMTUuMDQ2IDE5Ni45NTIgMzE5Ljk5OCAyMDIuOTY1IDMxOS45OThDMjAzLjY4NCAzMTkuOTk4IDIwNC40MTggMzE5LjkyOCAyMDUuMTYyIDMxOS43NzlMMjkyLjQ1MyAzMDIuMzJDMjk2LjcxMSAzMDEuNDY5IDMwMC42MjEgMjk5LjM3NSAzMDMuNjkxIDI5Ni4zMDVMNDk5LjEwOSAxMDAuOTA2QzUwNy43MDMgOTIuMzE0IDUxMiA4MS4wNTEgNTEyIDY5Ljc4OFpNNDc2LjQ4MiA3OC4yNzdMMjgzLjIwNSAyNzEuNTM1TDIyOS43NzUgMjgyLjIyM0wyNDAuNDYxIDIyOC43OTFMNDMzLjcyNyAzNS41MTRDNDM2Ljc4NSAzMi40NTUgNDQwLjM1NSAzMS45OTggNDQyLjIxMSAzMS45OThDNDQ0LjA2OCAzMS45OTggNDQ3LjYzOSAzMi40NTUgNDUwLjY5NyAzNS41MTRMNDc2LjQ4NiA2MS4zMDNDNDc5LjU0MyA2NC4zNjEgNDgwIDY3LjkzMiA0ODAgNjkuNzg5UzQ3OS41NDMgNzUuMjE5IDQ3Ni40ODIgNzguMjc3Wk0yNTYgNDY0QzE0MS4zMTIgNDY0IDQ4IDM3MC42ODggNDggMjU2UzE0MS4zMTIgNDggMjU2IDQ4QzI3OC40OSA0OCAzMDAuMTA3IDUxLjY5NSAzMjAuNDEgNTguMzNMMzQ1LjMyIDMzLjQxOEMzMTcuNjc4IDIyLjI4NSAyODcuNTggMTYgMjU2IDE2QzEyMy42NTYgMTYgMTYgMTIzLjY1NiAxNiAyNTZTMTIzLjY1NiA0OTYgMjU2IDQ5NkMyNjQuODQ0IDQ5NiAyNzIgNDg4Ljg0NCAyNzIgNDgwUzI2NC44NDQgNDY0IDI1NiA0NjRaTTQ1My42NzYgMTkxLjYwNUM0NjAuMzA3IDIxMS45MDQgNDY0IDIzMy41MTYgNDY0IDI1NkM0NjQgMzE3Ljc1IDQxMy43NSAzNjggMzUyIDM2OEMzMjIuODE0IDM2OCAyOTYuNDMyIDM1Ni41MTQgMjc2LjQ3NSAzMzguMTU0TDI0MC4wMzkgMzQ1LjQzOEMyNjYuNDQ5IDM3OC40MjQgMzA2LjU1MyA0MDAgMzUyIDQwMEM0MzEuNDA2IDQwMCA0OTYgMzM1LjQwNiA0OTYgMjU2QzQ5NiAyMjQuNDI2IDQ4OS43MTkgMTk0LjMzNCA0NzguNTkgMTY2LjY5N0w0NTMuNjc2IDE5MS42MDVaICI+PC9wYXRoPjwvc3ZnPg==|width=32|height=32)
 */
export default function PenSwirl(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M512 69.788C512 58.527 507.704 47.267 499.113 38.676L473.324 12.887C464.732 4.295 453.473 -0.002 442.213 -0.002C430.951 -0.002 419.691 4.295 411.1 12.887L215.691 208.307C212.619 211.379 210.527 215.291 209.676 219.549L192.219 306.836C192.07 307.579 191.999 308.314 191.999 309.034C191.999 315.046 196.952 319.998 202.965 319.998C203.684 319.998 204.418 319.928 205.162 319.779L292.453 302.32C296.711 301.469 300.621 299.375 303.691 296.305L499.109 100.906C507.703 92.314 512 81.051 512 69.788ZM476.482 78.277L283.205 271.535L229.775 282.223L240.461 228.791L433.727 35.514C436.785 32.455 440.355 31.998 442.211 31.998C444.068 31.998 447.639 32.455 450.697 35.514L476.486 61.303C479.543 64.361 480 67.932 480 69.789S479.543 75.219 476.482 78.277ZM256 464C141.312 464 48 370.688 48 256S141.312 48 256 48C278.49 48 300.107 51.695 320.41 58.33L345.32 33.418C317.678 22.285 287.58 16 256 16C123.656 16 16 123.656 16 256S123.656 496 256 496C264.844 496 272 488.844 272 480S264.844 464 256 464ZM453.676 191.605C460.307 211.904 464 233.516 464 256C464 317.75 413.75 368 352 368C322.814 368 296.432 356.514 276.475 338.154L240.039 345.438C266.449 378.424 306.553 400 352 400C431.406 400 496 335.406 496 256C496 224.426 489.719 194.334 478.59 166.697L453.676 191.605Z " />
        </Icon>
    </>
}