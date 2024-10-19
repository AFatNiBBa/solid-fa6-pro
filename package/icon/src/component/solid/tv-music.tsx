
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tv-music` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tv-music?s=solid tv-music}
 * @preview ![tv-music](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDAgMzIwQzI2Ni41IDMyMCAyODggMzA1LjYyNSAyODggMjg4VjIwMy4xMjVMMzg0IDE2NS42MjVWMjI2QzM3OC43NSAyMjQuNzUgMzczLjM3NSAyMjQgMzY4IDIyNEMzNDEuNSAyMjQgMzIwIDIzOC4zNzUgMzIwIDI1NlMzNDEuNSAyODggMzY4IDI4OFM0MTYgMjczLjYyNSA0MTYgMjU2VjExMkM0MTYgMTA2Ljg3NSA0MTMuNjI1IDEwMi4xMjUgNDA5LjUgOTkuMTI1UzQwMCA5NS4yNSAzOTUuMjUgOTYuNzVMMjY3LjI1IDE0NEMyNjAuNSAxNDYuMTI1IDI1NiAxNTIuMjUgMjU2IDE1OS4yNVYyNThDMjUwLjc1IDI1Ni43NSAyNDUuMzc1IDI1NiAyNDAgMjU2QzIxMy41IDI1NiAxOTIgMjcwLjM3NSAxOTIgMjg4UzIxMy41IDMyMCAyNDAgMzIwWk01MTIgNDQ4SDEyOEMxMTAuMzI3IDQ0OCA5NiA0NjIuMzI3IDk2IDQ4MFY0ODBDOTYgNDk3LjY3MyAxMTAuMzI3IDUxMiAxMjggNTEySDUxMkM1MjkuNjczIDUxMiA1NDQgNDk3LjY3MyA1NDQgNDgwVjQ4MEM1NDQgNDYyLjMyNyA1MjkuNjczIDQ0OCA1MTIgNDQ4Wk01OTIgMEg0OEMyMS41IDAgMCAyMS41IDAgNDhWMzY4QzAgMzk0LjUgMjEuNSA0MTYgNDggNDE2SDU5MkM2MTguNSA0MTYgNjQwIDM5NC41IDY0MCAzNjhWNDhDNjQwIDIxLjUgNjE4LjUgMCA1OTIgMFpNNTc2IDM1Mkg2NFY2NEg1NzZWMzUyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function TvMusic(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M240 320C266.5 320 288 305.625 288 288V203.125L384 165.625V226C378.75 224.75 373.375 224 368 224C341.5 224 320 238.375 320 256S341.5 288 368 288S416 273.625 416 256V112C416 106.875 413.625 102.125 409.5 99.125S400 95.25 395.25 96.75L267.25 144C260.5 146.125 256 152.25 256 159.25V258C250.75 256.75 245.375 256 240 256C213.5 256 192 270.375 192 288S213.5 320 240 320ZM512 448H128C110.327 448 96 462.327 96 480V480C96 497.673 110.327 512 128 512H512C529.673 512 544 497.673 544 480V480C544 462.327 529.673 448 512 448ZM592 0H48C21.5 0 0 21.5 0 48V368C0 394.5 21.5 416 48 416H592C618.5 416 640 394.5 640 368V48C640 21.5 618.5 0 592 0ZM576 352H64V64H576V352Z" />
        </Icon>
    </>
}